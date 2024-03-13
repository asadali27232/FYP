import numpy as np
import matplotlib.pyplot as plt
import wfdb
import os
import streamlit as st

# Define the path to the background image
background_image_path = 'ecg_bg_12.png'

def plot_ecg_from_file():
    # Define the directory where the files are located
    data_dir = 'D:\\Semester 7\\FYP\data\\records500\\00000'

    # File names without extensions
    record_name = '00001_hr'

    # Complete file paths
    hea_file = os.path.join(data_dir, record_name)
    dat_file = os.path.join(data_dir, record_name + '.dat')

    # Read ECG data using wfdb
    signals, fields = wfdb.rdsamp(hea_file)

    # Get the lead names from the signal information
    lead_names = fields['sig_name']

    # If lead names are not provided, generate default names
    if not lead_names:
        lead_names = [f'Lead{i+1}' for i in range(len(signals[0]))]

    num_leads = len(lead_names)
    num_rows = 12
    num_cols = 1

    fig, axs = plt.subplots(num_rows, num_cols, figsize=(15, 5))

    for i, ax in enumerate(axs.flat):
        if i < num_leads:  # Ensure we don't exceed the number of leads
            ax.plot(signals[:, i], color='black')
            ax.set_ylabel(lead_names[i])
            ax.grid(True)

            # Remove x and y ticks
            ax.set_xticks([])
            ax.set_yticks([])

            # Remove box around subplot
            ax.spines['top'].set_visible(False)
            ax.spines['right'].set_visible(False)
            ax.spines['bottom'].set_visible(False)
            ax.spines['left'].set_visible(False)

    # Load and display the background image
    img = plt.imread(background_image_path)
    fig.figimage(img, resize='True', alpha=0.7, zorder=-1)

    plt.tight_layout()  # Adjust layout
    return fig

def main():
    st.title('ECG Viewer')

    # uploaded_file = st.file_uploader("Upload a .hea file", type="hea")

    # if uploaded_file is not None:
    #     # Save uploaded file
    #     with open('temp.hea', 'wb') as f:
    #         f.write(uploaded_file.getvalue())

        # # Define the directory where the files are located
        # data_dir = os.path.dirname('temp.hea')

        # # Read the uploaded .hea file
        # record_name = os.path.basename('temp.hea').split('.')[0]

        # # Complete file paths
        # hea_file = os.path.join(data_dir, record_name)

    fig = plot_ecg_from_file()

    st.pyplot(fig)

if __name__ == "__main__":
    main()
