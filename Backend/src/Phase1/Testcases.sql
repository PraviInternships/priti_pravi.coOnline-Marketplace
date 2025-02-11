-- Test Cases
-- Test table creation
SELECT * FROM Users LIMIT 1;
SELECT * FROM Services LIMIT 1;
SELECT * FROM Bookings LIMIT 1;
SELECT * FROM Reviews LIMIT 1;

-- Test data insertion
SELECT COUNT(*) FROM Users;
SELECT COUNT(*) FROM Services;
SELECT COUNT(*) FROM Bookings;
SELECT COUNT(*) FROM Reviews;

-- Test foreign key constraints
INSERT INTO Bookings (customer_id, service_id, booking_time, status, payment_status, created_at)
VALUES (999, 999, NOW(), 'pending', 'pending', NOW()); -- Should fail

INSERT INTO Reviews (customer_id, service_id, rating, review_text, created_at)
VALUES (999, 999, 5, 'Invalid test review', NOW()); -- Should fail
