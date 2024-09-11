import * as sdk from "node-appwrite"; // Importing the Appwrite Software Development Kit (SDK) for interacting with the Appwrite backend services.

// variables for setting up the Appwrite SDK
export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

// Initialize the Appwrite client with the provided details
const client = new sdk.Client();

// Set up the client with endpoint, project ID, and API key
/*
  Specifying the URL of the Appwrite server
  Providing the project ID for the Appwrite project
  Supplying the API key for authenticating requests
*/
client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

// Export instances of Appwrite services for use throughout the application
export const databases = new sdk.Databases(client); // Service for interacting with Appwrite databases
export const users = new sdk.Users(client); // Service for managing users
export const messaging = new sdk.Messaging(client); // Service for sending messages
export const storage = new sdk.Storage(client); // Service for managing file storage
