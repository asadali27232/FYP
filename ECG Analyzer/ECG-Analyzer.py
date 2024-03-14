import numpy as np
import matplotlib.pyplot as plt
import wfdb
import os
import streamlit as st

# Define the path to the background image
background_image_path = 'ecg_bg_12.png'


def plot_ecg_from_file(hea_file, num_rows=12, time_range=(1, 10)):
    # Read ECG data using wfdb
    signals, fields = wfdb.rdsamp(hea_file)

    # Get the lead names from the signal information
    lead_names = fields['sig_name']

    # If lead names are not provided, generate default names
    if not lead_names:
        lead_names = [f'Lead{i+1}' for i in range(len(signals[0]))]

    num_leads = len(lead_names)
    num_cols = int(np.ceil(num_leads / num_rows))

    fig, axs = plt.subplots(num_rows, num_cols, figsize=(40, 35))

    for i, ax in enumerate(axs.flat):
        if i < num_leads:  # Ensure we don't exceed the number of leads
            ax.plot(signals[time_range[0] * 500: time_range[1]
                    * 500, i], color='black')
            ax.set_ylabel(lead_names[i])
            ax.grid(True)

            # Remove x and y ticks
            ax.set_xticks([])
            ax.set_yticks([])

            # # Remove box around subplot
            # ax.spines['top'].set_visible(False)
            # ax.spines['right'].set_visible(False)
            # ax.spines['bottom'].set_visible(False)
            # ax.spines['left'].set_visible(False)

    # Load and display the background image
    # img = plt.imread(background_image_path)
    # fig.figimage(img, resize='True', alpha=0.7, zorder=-1)

    plt.tight_layout()  # Adjust layout
    return fig


def main():
    st.title('ECG Viewer')

    # File uploader in the sidebar
    uploaded_hea_file = st.sidebar.file_uploader(
        "Upload ECG Signals File", type="hea")

    # Number of rows selector
    num_rows = st.sidebar.selectbox(
        "Number of Rows", [3, 4, 6, 12], index=3)  # Default to 12

    # Time range slider
    time_range = st.sidebar.slider(
        "Select Time Range (seconds)", 1, 10, (1, 10))

    if uploaded_hea_file is not None:
        # Get the current working directory
        # Remove the last dir from the path
        current_dir = os.getcwd().split(os.sep)[0:-1]
        current_dir = os.sep.join(current_dir)

        # Define the data directory relative to the current working directory
        data_dir = os.path.join(current_dir, "data", "records", "00000")

        # Read the uploaded .hea file
        record_name = os.path.basename(uploaded_hea_file.name).split('.')[0]

        # Construct the file paths
        hea_file = os.path.join(data_dir, record_name)

        fig = plot_ecg_from_file(hea_file, num_rows, time_range)
        st.pyplot(fig)


if __name__ == "__main__":
    main()
