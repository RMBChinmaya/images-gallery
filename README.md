Project Objectives:
The goal is to analyze X-ray images for detecting diseases or abnormalities.
Three models were utilized: VGG16 (training accuracy: 74%, test accuracy: 77%), ResNet (training accuracy: 93%, test accuracy: 62%), and a custom CNN model (training accuracy: 74%, test accuracy: 62%).
Code Structure:
The repository includes the following files:
README.md: Provides an overview of the project.
medical-image-analysis-with-cnn.ipynb: Jupyter notebook containing the code.
requirements.txt: Lists the required dependencies.
Steps Covered:
Exploratory Data Analysis (EDA): Analyzing the dataset, exploring correlations, and handling outliers or missing values.
Preprocessing: Splitting the dataset into training and testing sets, normalizing pixel values.
Model Building:
CNN Model: Built using TensorFlow and Keras.
VGG16 Model: Optimized architecture.
ResNet Model: Another architecture explored.
Model Evaluation: Metrics like accuracy, precision, recall, and F1 score were used.
