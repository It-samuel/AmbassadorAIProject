// Appwrite.js
import { Appwrite } from 'appwrite';


import { Client, Account } from "appwrite";

const appwrite = new Client()
.setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite API endpoint
.setProject('65359beb0e248bfe36be')   // Replace with your Appwrite Project ID

const account = new Account(client);

 

export default appwrite;
