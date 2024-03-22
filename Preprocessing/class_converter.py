import numpy as np
import matplotlib.pyplot as plt
import wfdb
import os
import csv

# Function to process a single record
def process_record(record_path, class_label, output_dir):
    file_number = os.path.basename('data/' + record_path).split('_')[0]  # Extract file number
    hea_file = record_path

    signals, fields = wfdb.rdsamp(hea_file)
    lead_names = fields.get('sig_name', [f'Lead {i+1}' for i in range(len(signals[0]))])

    csv_file = os.path.join(output_dir, f'{file_number}_{class_label}.csv')  # Include class
    with open(csv_file, 'w', newline='') as csvfile:
        csv_writer = csv.writer(csvfile)
        csv_writer.writerow(['Time'] + lead_names)
        for time, data_row in zip(range(len(signals)), signals):
            csv_writer.writerow([time] + list(data_row))

    print(f'CSV file created: {csv_file}')

# Parameters
input_csv = 'D:\\Semester 7\\FYP\\preprocessing\\final_labels.csv'
output_dir = 'D:\\Semester 7\\FYP\\preprocessing\\CSV_Data'  # Output directory
records_per_class = 1000

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Read the CSV file
with open(input_csv, 'r') as file:
    csv_reader = csv.reader(file)
    next(csv_reader)  # Skip header row
    for record_path, class_label in csv_reader:
        process_record(record_path, class_label, output_dir)

        # Limit processing (if needed)
        records_processed_for_class = sum(p.endswith(f'_{class_label}.csv') for p in os.listdir(output_dir))
        if records_processed_for_class >= records_per_class:
            break  # Move on to the next class
