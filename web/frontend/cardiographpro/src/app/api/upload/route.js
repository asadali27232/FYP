import nextConnect from 'next-connect';
import multer from 'multer';

// Set up multer for file uploads
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/'); // Directory to save the uploaded files
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname); // Use original file name
        },
    }),
});

// Create a Next.js API route handler
const handler = nextConnect();

// Handle POST request with multer
handler
    .use(
        upload.fields([
            { name: 'hea_file', maxCount: 1 },
            { name: 'dat_file', maxCount: 1 },
        ])
    )
    .post((req, res) => {
        // Access the files and other form data here
        const { age, gender } = req.body;
        const heaFile = req.files['hea_file'][0]; // Access uploaded .hea file
        const datFile = req.files['dat_file'][0]; // Access uploaded .dat file

        // Your logic to process the files and return a response
        const response = {
            superclassLabels:
                'NORM    0\nMI      1\nSTTC    0\nCD      0\nHYP     0',
            classNames: ['MI'],
            ecgPlotUrl: '/path/to/your/ecg_plot.png', // Update with actual URL of the generated ECG plot
        };

        res.status(200).json(response);
    });

export default handler;
