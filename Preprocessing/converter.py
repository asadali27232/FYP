import numpy as np
import matplotlib.pyplot as plt
import wfdb
import os
import csv

# Define the directory where the files are located
data_dir = 'D:\\Semester 7\\FYP\\data\\records\\00000'

# Loop over 1000 files (assuming filenames follow the pattern 0000X_hr.dat)
for i in range(999):
    # Generate file name
    file_number = str(i+1).zfill(5) # Zero padding for file numbers
    record_name = f'{file_number}_hr'

    # Complete file paths
    hea_file = os.path.join(data_dir, record_name)
    dat_file = os.path.join(data_dir, record_name + '.dat')

    # Read ECG data using wfdb
    signals, fields = wfdb.rdsamp(hea_file)

    # Get the lead names from the signal information
    lead_names = fields['sig_name']

    # If lead names are not provided, generate default names
    if not lead_names:
        lead_names = [f'Lead {i+1}' for i in range(len(signals[0]))]

    # Create a CSV file with the ECG data
    csv_file = f'CSV_Data\\{file_number}.csv'
    with open(csv_file, 'w', newline='') as csvfile:
        csv_writer = csv.writer(csvfile)
        csv_writer.writerow(['Time'] + lead_names)  # Write header row
        for time, data_row in zip(range(len(signals)), signals):
            csv_writer.writerow([time] + list(data_row))  # Write data rows

    print(f'CSV file created: {csv_file}')
