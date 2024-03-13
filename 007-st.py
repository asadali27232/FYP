import numpy as np
import matplotlib.pyplot as plt
import wfdb
import os
import streamlit as st


def plot_ecg_from_signal():
    # Define the directory where the files are located
    data_dir = 'C:\\Users\\LENOVO\\Repos\\FYP\\data\\records\\00000'

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
    num_cols = 2

    fig, axs = plt.subplots(num_rows, num_cols, figsize=(20, 20))

    # Define the path to the background image
    background_image_path = 'ecg_bg.png'

    for i, ax in enumerate(axs.flat):
        if i < num_leads:  # Ensure we don't exceed the number of leads
            ax.plot(signals[:, i], color='black')
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
    # fig.figimage(img, resize='True', alpha=0.7)

    plt.tight_layout()  # Adjust layout
    return fig


def main():
    st.title('ECG Viewer')

    fig = plot_ecg_from_signal()

    st.pyplot(fig)


if __name__ == "__main__":
    main()
