import glfw
from OpenGL.GL import *
import numpy as np

# Vertex shader source code
vertex_shader_source = """
#version 330 core
layout (location = 0) in vec3 aPos;

void main()
{
    gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);
}
"""

# Fragment shader source code
fragment_shader_source = """
#version 330 core
out vec4 FragColor;

void main()
{
    FragColor = vec4(1.0f, 0.0f, 0.0f, 1.0f); // Red color
}
"""

# Function to initialize OpenGL and create a window
def init():
    # Initialize GLFW
    if not glfw.init():
        return None
    
    # Set GLFW window hints
    glfw.window_hint(glfw.CONTEXT_VERSION_MAJOR, 3)
    glfw.window_hint(glfw.CONTEXT_VERSION_MINOR, 3)
    glfw.window_hint(glfw.OPENGL_PROFILE, glfw.OPENGL_CORE_PROFILE)
    
    # Create a GLFW window
    window = glfw.create_window(800, 600, "OpenGL Window", None, None)
    if not window:
        glfw.terminate()
        return None
    
    glfw.make_context_current(window)
    
    return window

# Function called when the framebuffer size changes
def framebuffer_size_callback(window, width, height):
    glViewport(0, 0, width, height)

# Function to compile a shader
def compile_shader(shader_source, shader_type):
    shader = glCreateShader(shader_type)
    glShaderSource(shader, shader_source)
    glCompileShader(shader)
    
    # Check compilation status
    if not glGetShaderiv(shader, GL_COMPILE_STATUS):
        info_log = glGetShaderInfoLog(shader)
        print(f"Shader compilation failed: {info_log.decode()}")
        glDeleteShader(shader)
        return None
    
    return shader

# Main function
def main():
    # Initialize GLFW and create a window
    window = init()
    if not window:
        return -1
    
    # Register the framebuffer size callback function
    glfw.set_framebuffer_size_callback(window, framebuffer_size_callback)
    
    # Compile the vertex and fragment shaders
    vertex_shader = compile_shader(vertex_shader_source, GL_VERTEX_SHADER)
    fragment_shader = compile_shader(fragment_shader_source, GL_FRAGMENT_SHADER)
    if not vertex_shader or not fragment_shader:
        glfw.terminate()
        return -1
    
    # Create shader program
    shader_program = glCreateProgram()
    glAttachShader(shader_program, vertex_shader)
    glAttachShader(shader_program, fragment_shader)
    glLinkProgram(shader_program)
    
    # Check linking status
    if not glGetProgramiv(shader_program, GL_LINK_STATUS):
        info_log = glGetProgramInfoLog(shader_program)
        print(f"Shader program linking failed: {info_log.decode()}")
        glfw.terminate()
        return -1
    
    # Delete shader objects
    glDeleteShader(vertex_shader)
    glDeleteShader(fragment_shader)
    
    # Define the triangle vertices
    vertices = np.array([
        -0.5, -0.5, 0.0,  # Bottom left
         0.5, -0.5, 0.0,  # Bottom right
         0.0,  0.5, 0.0   # Top
    ], dtype=np.float32)
    
    # Create and bind vertex buffer object (VBO)
    vbo = glGenBuffers(1)
    glBindBuffer(GL_ARRAY_BUFFER, vbo)
    glBufferData(GL_ARRAY_BUFFER, vertices.nbytes, vertices, GL_STATIC_DRAW)
    
    # Create vertex array object (VAO)
    vao = glGenVertexArrays(1)
    glBindVertexArray(vao)
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(GLfloat), ctypes.c_void_p(0))
    glEnableVertexAttribArray(0)
    glBindBuffer(GL_ARRAY_BUFFER, 0)
    
    # Main render loop
    while not glfw.window_should_close(window):
        # Process events
        glfw.poll_events()
        
        # Clear the color buffer
        glClear(GL_COLOR_BUFFER_BIT)
        
        # Use shader program
        glUseProgram(shader_program)
        
        # Draw the triangle
        glBindVertexArray(vao)
        glDrawArrays(GL_TRIANGLES, 0, 3)
        
        # Swap the front and back buffers
        glfw.swap_buffers(window)
    
    # Delete resources
    glDeleteVertexArrays(1, vao)
    glDeleteBuffers(1, vbo)
    glDeleteProgram(shader_program)
    
    # Terminate GLFW
    glfw.terminate()

# Call the main function
if __name__ == "__main__":
    main()
