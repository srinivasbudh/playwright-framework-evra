### Test Plan for Web Application: **EVRA by Geophy**

#### **1. Introduction**
- **Objective**: The purpose of this test plan is to outline the strategies, objectives, resources, scope, and schedule of testing activities for the EVRA web application. This document will provide detailed information on the testing process for ensuring the application meets the specified requirements and performs as expected.
  
#### **2. Scope of Testing**
- **In-Scope**:
  - Functionality Testing (Pre-login and Post-login)
  - Usability Testing
  - Performance Testing
  - Security Testing
  - Compatibility Testing (across different browsers and devices)
  - Data Integrity Testing
  - User Interface Testing

- **Out-of-Scope**:
  - Testing third-party services (beyond the integration points)
  - Infrastructure/Server-side testing

#### **3. Test Objectives**
- Validate the accuracy and reliability of hyperlocal data, benchmarks, value estimates, and sales comps.
- Ensure a seamless user experience in assessing the attractiveness and risks of commercial multifamily properties.
- Confirm that all user functionalities, both pre-login and post-login, work as intended.
- Identify and address any security vulnerabilities.

#### **4. Test Environment**
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Devices**: Desktop
- **Operating Systems**: Windows, macOS
- **Tools**: PLaywright with Typescript for automation.

#### **5. Test Strategy**
- **Functional Testing**: 
  - Validate all functionalities of the application both pre-login and post-login.
  - Ensure proper data retrieval and display, especially in value estimation and sales comps.
  
- **Usability Testing**:
  - Evaluate user interfaces and navigation.
  - Check if the user can easily perform tasks without confusion.
  
- **Performance Testing**:
  - Test the application's response time under various loads.
  - Check the application's behavior under stress conditions.
  
- **Security Testing**:
  - Verify authentication and authorization mechanisms.
  - Conduct vulnerability scanning and penetration testing.
  
- **Compatibility Testing**:
  - Ensure the application works seamlessly across different browsers.
  
- **Data Integrity Testing**:
  - Ensure that data is accurate and consistent across the system.
  - Test the correctness of value estimates and benchmarks.

#### **6. Test Deliverables**
- Test Plan Document (Thi Document)
- Test Cases (Also added at the for making it a single document)
- Test Execution Report (Will not be shared as part of challenge)
- Defect Log (Only applicable when defects are found)
- Test Summary Report (Will not be shared as part of challenge)


### **Test Cases**

#### **Pre-login Test Cases**

1. **Test Case ID**: TC01
   - **Title**: Verify access to the homepage.
   - **Preconditions**: User is not logged in.
   - **Test Steps**:
     1. Open the application URL in the browser.
   - **Expected Result**: Homepage loads successfully with all the elements visible.

2. **Test Case ID**: TC02
   - **Title**: Verify user registration functionality using Sign-up.
   - **Preconditions**: User is not logged in.
   - **Test Steps**:
     1. Navigate to the registration page using sign-up.
     2. Fill in the required fields (e.g., FirstName, LastName, Email, Password).
     3. Submit the form.
     4. Enter the email authentication code sent on email
   - **Expected Result**: User account is created successfully, and a confirmation email is sent.

3. **Test Case ID**: TC03
   - **Title**: Verify user login functionality using email.
   - **Preconditions**: User account exists.
   - **Test Steps**:
     1. Navigate to the login page.
     2. Enter valid credentials (Email, Password) in 2 steps.
     3. Click on the "Login" button.
   - **Expected Result**: User is successfully logged in and redirected to the Search page dashboard.

4. **Test Case ID**: TC04
   - **Title**: Verify user login functionality using gmail.
   - **Preconditions**: User already has a gmail account.
   - **Test Steps**:
     1. Navigate to the login page using sign in with google.
     2. Enter valid credentials to access gmail.
     3. Click on the "Login" button.
   - **Expected Result**: User is successfully logged in and redirected to the Search page dashboard.

5. **Test Case ID**: TC05
   - **Title**: Verify password recovery functionality.
   - **Preconditions**: User is registered.
   - **Test Steps**:
     1. Navigate to the login page.
     2. Enter valid email and proceed to password page
     3. Click on "Forgot Password" link 
     3. Navigate to the "Forgot Password" page.
     2. Enter a registered email.
     3. Submit the form.
   - **Expected Result**: A password recovery email is sent to the user's email address.

#### **Post-login Test Cases**

1. **Test Case ID**: TC06
   - **Title**: Verify user can search for a property based on address.
   - **Preconditions**: User is logged in.
   - **Test Steps**:
     1. User has navigated to Search Page.
     2. 
     3. Check the displayed data (e.g., property estimates, sales comps).
   - **Expected Result**: All data displayed is accurate and corresponds to the expected values.

2. **Test Case ID**: TC06
   - **Title**: Verify the functionality of the search tool.
   - **Preconditions**: User is logged in.
   - **Test Steps**:
     1. Login to the application.
     2. Use the search bar to search for a specific property of choice.
   - **Expected Result**:The property details of specific address is displayed

3. **Test Case ID**: TC07
   - **Title**: Verify the hyperlocal data is displayed under overview tab of search property 
   - **Preconditions**: User is logged in and searched for a specific address.
   - **Test Steps**:
     1. Navigate to Overview tab of Property Due Diligence.
   - **Expected Result**: Hyperlocal data of Property details, tenant insights and neighborhood details are displayed in overview tab. 

4. **Test Case ID**: TC08
   - **Title**: Verify the benchmark data is displayed under overview tab of search property 
   - **Preconditions**: User is logged in and searched for a specific address.
   - **Test Steps**:
     1. Navigate to Overview tab of Property Due Diligence.
   - **Expected Result**: 
   1. Market benchmark details are displayed in overview tab.
   2. Location benchmark details are displayed in overview tab.

 5. **Test Case ID**: TC09
   - **Title**: Verify the property map is intractable 
   - **Preconditions**: User is logged in and searched for a specific address.
   - **Test Steps**:
     1. Navigate to Map of Property in Property Due Diligence.
   - **Expected Result**: 
   1. Map is intractable via mouse operations 
   2. All buttons and selection options on map work as expected

6. **Test Case ID**: TC10
   - **Title**: Verify user can filter can filter different properties  
   - **Preconditions**: User is logged in
   - **Test Steps**:
     1. Navigate to Property Map tab
     2. Add different values for units, years and safety score
     3. Use different inputs and checkbox options to filer list of properties
   - **Expected Result**: 
   1. List of properties are updated on every change made on input boxes and check boxes
   2. Properties count for that filter is continuously updated for the filters applied
   

#### **Security Test Cases**


1. **Test Case ID**: TC10
   - **Title**: Verify that passwords are encrypted in the database.
   - **Preconditions**: Access to the database.
   - **Test Steps**:
     1. Retrieve user credentials from the database.
   - **Expected Result**: Passwords are stored in encrypted format.

2. **Test Case ID**: TC11
   - **Title**: Verify SQL Injection vulnerability.
   - **Preconditions**: User is not logged in.
   - **Test Steps**:
     1. Attempt to inject SQL commands in the login form.
   - **Expected Result**: The application handles the input safely without executing any injected commands.


***Note:*** A lot more functional cases can be added and can be elaborated but considering the time limit give for completing the challenge I have only added these functional test cases just to demonstrate how can test cases be written