# Asset Management Dashboard

Welcome to the Asset Management Dashboard! This is a MERN (MongoDB, Express.js, React, Node.js) stack project designed to manage motor assets, including functionalities for adding, removing, editing assets, and raising maintenance tickets.

Live Demo - [Asset Management Dashboard](https://intense-spire-24748-8204f9b5a750.herokuapp.com)


## Features

- **Dashboard Overview:** Provides a summary of all motor assets, key metrics, and recent activity.
- **Assets Management:**
  - **List All Assets:** Displays all assets with brief details (e.g., motor ID, name, status).
  - **Add New Asset:** Form to add new assets with necessary details and validation.
  - **Edit Asset:** Form to edit existing asset details with validation.
  - **Remove Asset:** Allows deletion of assets with a confirmation prompt.
  - **Detailed Asset View:** Clicking on an asset opens a detailed view.
- **Maintenance Tickets Management:**
  - **List All Tickets:** Displays all maintenance tickets with details.
  - **Raise New Ticket:** Form to create a new maintenance ticket linked to a specific asset.
  - **Edit Ticket:** Form to edit existing ticket details with validation.
  - **Update Ticket Status:** Allows updating the status of tickets.
  - **Delete Ticket:** Allows deletion of tickets with a confirmation prompt.


## Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akashtripathi1/asset-management-dashboard.git

2. **Install dependencies**
   ```bash
   cd asset-management-dashboard
   npm install
   cd client
   npm install
   
3. **Run the development server:**
   ```bash
   npm run dev

4. **Access the application in your browser at 'http://localhost:3000'**

## Pages

### Dashboard Main Page
- Overview of all motor assets.
- Summarizes key metrics and recent activity.

### Assets Page
- **List of all motors:** Includes motor ID, name, status.
- **Add New Asset:**
  - Form to input motor ID, name, description, location, status.
  - Validates input data before submission.
- **Edit Asset:**
  - Form to edit existing asset details.
  - Validates changes before saving.
- **Remove Asset:**
  - Allows users to delete assets with a confirmation prompt.
  - Clicking on an asset opens a detailed view of the asset.

### Maintenance Tickets Page
- **List all maintenance tickets:** Includes ticket ID, asset ID, issue description, status, date raised.
- **Raise New Ticket:**
  - Form to create a new maintenance ticket linked to a specific asset.
  - Validates input data before submission.
- **Edit Ticket:**
  - Form to edit existing ticket details.
  - Validates changes before saving.
- **Manage Ticket Status:**
  - Update the status of tickets (e.g., open, in progress, resolved).
- **Delete Ticket:**
  - Allows users to delete tickets with a confirmation prompt.

## Example Data

### Asset Example
1. **Motor ID:** MTR-001
2. **Name:** Main Conveyor Motor
3. **Description:** Motor used to drive the main conveyor belt in the production line.
4. **Location:** Factory Floor A - Section B
5. **Manufacturer:** ACME Motors
6. **Model Number:** ACM1234
7. **Serial Number:** SN-987654321
8. **Installation Date:** 2021-08-15
9. **Last Maintenance Date:** 2023-03-10
10. **Status:** Operational
11. **Specifications:**
   - Power: 15 kW
   - Voltage: 400V
   - Current: 35A
   - Speed: 1500 RPM

### Maintenance Ticket Example
1. **Ticket ID:** TCK-101
2. **Asset ID:** MTR-001
3. **Issue Description:** Motor making unusual noise during operation. Suspected bearing wear.
4. **Date Raised:** 2023-05-20
5. **Status:** Open



