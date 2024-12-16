import cv2
from math import cos, sin
import mediapipe as mp
import pyassimp
from OpenGL.GL import *
import glfw
from OpenGL.GLU import *

# Initialize MediaPipe Face Mesh
mp_face_mesh = mp.solutions.face_mesh
face_mesh = mp_face_mesh.FaceMesh()

# Load 3D earring model using PyAssimp
try:
    scene = pyassimp.load('earring.obj')
except ImportError:
    print("PyAssimp library not found or failed to import.")
    exit()

# Define earlobe keypoints (indices)
earlobe_indices = [1209, 1149, 1097, 1053, 1011]

# Load the image
frame = cv2.imread('download.jpeg')  # Replace 'download.jpeg' with the path to your image

# Convert the image to RGB
rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

# Detect facial landmarks
results = face_mesh.process(rgb_frame)

# Initialize GLFW
if not glfw.init():
    print("Failed to initialize GLFW")
    exit()

# Create a GLFW window
window = glfw.create_window(frame.shape[1], frame.shape[0], "3D Earring Model", None, None)
if not window:
    glfw.terminate()
    print("Failed to create GLFW window")
    exit()

# Make the window's context current
glfw.make_context_current(window)

# OpenGL functions
def draw_earring_model(earlobe_position):
    glEnable(GL_DEPTH_TEST)
    glMatrixMode(GL_MODELVIEW)
    glLoadIdentity()
    glPushMatrix()
    glTranslatef(earlobe_position[0], earlobe_position[1], earlobe_position[2])
    # Render earring model
    for mesh in scene.meshes:
        glBegin(GL_TRIANGLES)
        for face in mesh.faces:
            for vertex_id in face:
                vertex = mesh.vertices[vertex_id]
                glVertex3fv(vertex)
        glEnd()
    glPopMatrix()

def draw_circle(x, y, radius):
    glBegin(GL_TRIANGLE_FAN)
    glVertex2f(x, y)
    for i in range(360):
        angle = 2.0 * 3.1415926 * i / 360
        glVertex2f(x + radius * cos(angle), y + radius * sin(angle))
    glEnd()

def render(earlobe_position):
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
    draw_earring_model(earlobe_position)
    glfw.swap_buffers(window)

# Main loop
while not glfw.window_should_close(window):
    # Process events
    glfw.poll_events()

    # Draw the scene
    glClearColor(0.0, 0.0, 0.0, 1.0)
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)

    if results.multi_face_landmarks:
        for face_landmarks in results.multi_face_landmarks:
            # Ensure that the face_landmarks.landmark list has enough landmarks
            if len(face_landmarks.landmark) > max(earlobe_indices):
                # Extract earlobe positions
                earlobe_position = []
                for index in earlobe_indices:
                    landmark = face_landmarks.landmark[index]
                    x = int(landmark.x * frame.shape[1])
                    y = int(landmark.y * frame.shape[0])
                    z = 0  # Assuming the earring model is at the same depth as the earlobe
                    earlobe_position.append((x, y, z))

                # Draw circles on the image to indicate earlobe positions
                for pos in earlobe_position:
                    cv2.circle(frame, (pos[0], pos[1]), 5, (0, 255, 0), -1)

                # Render using OpenGL
                render(earlobe_position)

            else:
                print("Not enough landmarks detected for earlobe detection.")

    # Swap buffers
    glfw.swap_buffers(window)

# Terminate GLFW
glfw.terminate()
