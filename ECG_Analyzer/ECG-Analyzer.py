import numpy as np
import matplotlib.pyplot as plt
import wfdb
import os
import streamlit as st
import shutil


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

    # Define the path to the background image
    # background_image_path = 'ecg_bg_12.png'
    # Load and display the background image
    # img = plt.imread(background_image_path)
    # fig.figimage(img, resize='True', alpha=0.7, zorder=-1)

    plt.tight_layout()
    return fig


def main():
    st.title('ECG Viewer')

    # File uploader in the sidebar
    uploaded_hea_file = st.sidebar.file_uploader(
        "Upload ECG Signals .hea File", type="hea")

    print(uploaded_hea_file)

    uploaded_dat_file = st.sidebar.file_uploader(
        "Upload ECG Signals .dat File", type="dat")

    # Number of rows selector
    num_rows = st.sidebar.selectbox(
        "Number of Rows", [3, 4, 6, 12], index=3)  # Default to 12

    # Time range slider
    time_range = st.sidebar.slider(
        "Select Time Range (seconds)", 1, 10, (1, 10))

    if uploaded_hea_file is not None and uploaded_dat_file is not None:
        if not os.path.exists("temp"):
            os.makedirs("temp")

        # Save the uploaded files temporarily
        with open(os.path.join("temp", uploaded_hea_file.name), "wb") as f:
            f.write(uploaded_hea_file.getbuffer())

        with open(os.path.join("temp", uploaded_dat_file.name), "wb") as f:
            f.write(uploaded_dat_file.getbuffer())

        # Get the dynamic paths of the saved files
        uploaded_hea_file_path = os.path.join("temp", uploaded_hea_file.name)

        # Read the record name (you already have the code for this)
        hea_file = uploaded_hea_file_path.split('.')[0]

        fig = plot_ecg_from_file(
            hea_file, num_rows, time_range)
        st.pyplot(fig)

    temp_folder = "temp"
    if os.path.exists(temp_folder):
        shutil.rmtree(temp_folder)


if __name__ == "__main__":
    main()
