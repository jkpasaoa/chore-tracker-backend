\c chores_dev;

INSERT INTO chores (name, description, due_date, status, points, priority, category)
VALUES
  ('Clean Bedroom', 'Tidy up and organize the bedroom.', '2023-05-24', 'Pending', 5, 'High', 'Cleaning'),
  ('Wash the Dishes', 'Clean the dirty dishes and put them away.', '2023-05-19', 'Completed', 5, 'Medium', 'Kitchen'),
  ('Take out the Trash', 'Empty all the trash bins and replace the bags.', '2023-05-20', 'Overdue', 5, 'Low', 'Cleaning'),
  ('Vacuum the Floor', 'Use the vacuum cleaner to clean the floors.', '2023-05-21', 'Pending', 5, 'High', 'Cleaning'),
  ('Feed the Pet', 'Give food and water to the pet.', '2023-05-22', 'Pending', 5, 'Medium', 'Pet Care'),
  ('Fold Laundry', 'Fold and organize clean laundry.', '2023-05-23', 'Completed', 5, 'Low', 'Laundry'),
  ('Clean Bedroom', 'Tidy up and organize the bedroom.', '2023-05-24', 'Overdue', 5, 'High', 'Cleaning'),
  ('Water Plants', 'Ensure plants receive adequate watering.', '2023-05-25', 'Completed', 5, 'Medium', 'Gardening'),
  ('Set the Table', 'Set the table for meals.', '2023-05-26', 'Pending', 5, 'Low', 'Kitchen'),
  ('Mow the Lawn', 'Trim and maintain the lawn.', '2023-05-27', 'Overdue', 5, 'High', 'Gardening'),
  ('Organize Toys', 'Arrange and put away toys and games.', '2023-05-29', 'Pending', 5, 'Medium', 'Cleaning'),
  ('Sweep the Patio', 'Sweep and clean the outdoor patio area.', '2023-05-30', 'Pending', 5, 'Low', 'Cleaning'),
  ('Empty Dishwasher', 'Unload and put away dishes from the dishwasher.', '2023-05-31', 'Completed', 5, 'Medium', 'Kitchen');
