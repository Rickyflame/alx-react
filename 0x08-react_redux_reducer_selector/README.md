task 0:

    Reuse the latest dashboard project you worked on in the React course 0x08-React_Redux_action_creator+normalizr

Create the basic state

In a file named reducers/uiReducer.js, define the initial state of the reducer for the UI:

    It should have one boolean property isNotificationDrawerVisible
    It should have one boolean property isUserLoggedIn
    It should have one empty object user

Create the reducer function

In the same file, import all the actions that you created in the file actions/uiActionTypes and create a reducer function named uiReducer:

    DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
    HIDE_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to false
    LOGIN_SUCCESS should set isUserLoggedIn to true
    LOGIN_FAILURE should set isUserLoggedIn to false
    LOGOUT should set isUserLoggedIn to false

Write the tests

In a file named reducers/uiReducer.test.js, define the test suite for our simple reducer:

    Write a test verifying the state returned by the uiReducer function equals the initial state when no action is passed
    Write a test verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed
    Write a test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property

Tips:

    Don’t forget to set up the default case in your switch function

Requirements:

    You should not mutate the state within the reducer
    You must use the spread operator to change the state
    All the tests in the project should pass


1:

    Reuse the latest dashboard project you worked on in the React course 0x08-React_Redux_action_creator+normalizr

Create the basic state

In a file named reducers/uiReducer.js, define the initial state of the reducer for the UI:

    It should have one boolean property isNotificationDrawerVisible
    It should have one boolean property isUserLoggedIn
    It should have one empty object user

Create the reducer function

In the same file, import all the actions that you created in the file actions/uiActionTypes and create a reducer function named uiReducer:

    DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
    HIDE_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to false
    LOGIN_SUCCESS should set isUserLoggedIn to true
    LOGIN_FAILURE should set isUserLoggedIn to false
    LOGOUT should set isUserLoggedIn to false

Write the tests

In a file named reducers/uiReducer.test.js, define the test suite for our simple reducer:

    Write a test verifying the state returned by the uiReducer function equals the initial state when no action is passed
    Write a test verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed
    Write a test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property

Tips:

    Don’t forget to set up the default case in your switch function

Requirements:

    You should not mutate the state within the reducer
    You must use the spread operator to change the state
    All the tests in the project should pass


2:
Create a load action

In the courseActionTypes file, create a new action corresponding to when the API returns the list of courses. You can name it FETCH_COURSE_SUCCESS

Create the course reducer and default state

In a file courseReducer.js, write a reducer function. The default state should be an empty array.

Define the FETCH_COURSE_SUCCESS action

When the action creator sends the action FETCH_COURSE_SUCCESS, it also sends the list of courses in a data attribute. The action would look like

3:
In the notificationActionTypes file, create a new action corresponding to when the API returns the list of notifications. You can name it FETCH_NOTIFICATIONS_SUCCESS

Create the notifications reducer and default state

In a file notificationReducer.js, write a reducer function. The default state should be an object with:

    notifications, which will store the list of notifications
    filter, which will be the attribute storing which filter is selected

Define the FETCH_NOTIFICATIONS_SUCCESS action

When the action creator sends the action FETCH_NOTIFICATIONS_SUCCESS, it also sends the list of notifications in a data attribute. The action would look like:

4:
As you can see, updating a specific item in a collection is rather complicated and error prone. Using Normalizr is a good opportunity to simplify mutation

Course schema

Create a new file schema/courses.js. In the file define a schema entity for courses. Create a function coursesNormalizer that would take data as argument and normalize the data with the schema you created.

In the course reducer function:

    Update the initial state to use an Immutable.js Map
    When FETCH_COURSE_SUCCESS action is called, normalize the data with the function you created and merge it with the state
    When SELECT_COURSE or UNSELECT_COURSE is called, use the setIn function from Immutable to update the value of the item

Update the notification schema

In the file schema/notifications.js, create a function notificationsNormalizer that would take data as argument and normalize it with the notification schema you created in the previous course.

Update the notification reducer

In the notification reducer function:

    Update the initial state to use an Immutable.js Map
    When FETCH_NOTIFICATIONS_SUCCESS action is called, normalize the data with the function notificationsNormalizer you created and merge it with the state
    When SET_TYPE_FILTER, use the set function from Immutable to update the value of the state
    When MARK_AS_READ, use the setIn function from Immutable to update the value of the item in the state

Update the test files/suites:

    Update the course reducer test file to match the new reducer

Tips:

    You can use the fromJS function from Immutable.js to easily create the initial state from an object
    You can use the toJS function from Immutable.js to easily compare the expected data
    Selecting an unselecting a course item should only take one line now
    Marking a notification item as read should only take one line now


5:
Selectors are an efficient way to access the data from the state because a selector is not recomputed unless one of its arguments change.

Let’s create a few selectors for the Notifications reducer in src/selectors/notificationSelector.js

    Create a first selector for the filter named filterTypeSelected, that will return the value of the filter
    Create another selector for the notifications named getNotifications, that will return the list of notifications in a Map format
    Create another selector for the notifications named getUnreadNotifications, that will return the list of unread notifications in a Map format

Create a test suite for your selectors in a file named src/selectors/notificationSelector.test.js:

    test that filterTypeSelected works as expected
    test that getNotifications returns a list of the message entities within the reducer
    test that getUnreadNotifications return a list of the message entities within the reducer

Tips:

    To write your tests, you can have a state variable using the reducer you created. And pass the state to the selector functions
    You can also look into using Reselect for your own projects when you have advanced needs for filtering, reducing and merging data from the state

Requirements:

    All the tests in the project should pass



