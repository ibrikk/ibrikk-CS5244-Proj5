DELETE FROM book;
ALTER TABLE book AUTO_INCREMENT = 1001;

DELETE FROM category;
ALTER TABLE category AUTO_INCREMENT = 1001;

INSERT INTO `category` (`name`) VALUES ('New Releases'),('For You'),('Fiction'),('Business'),('Romance'),('Travel'),('Cooking'),('Action & Adventure'),('DIY');

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('1984', 'George Orwell', '', 17.45, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('All The Colors of the Dark', 'Chris Walker', '', 13.59, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', '', 15.99, 0, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Housemaid', 'Freida McFadden', '', 8.99, 0, TRUE, FALSE, 1001);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Sapiens', 'Yuval Noah Harari', '', 24.99, 0, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Animal Farm', 'George Orwell', '', 5.50, 0, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Why Nations Fail', 'Daron Acemoglu and James A. Robinson', '', 13.50, 0, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Origin of Species', 'Charles Darwin', '', 29.50, 0, TRUE, FALSE, 1002);


INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('A Court of Mist and Ruin', 'Sarah J. Maas', '', 21.50, 0, TRUE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Assassin\'s Blade', 'Sarah J. Maas', '', 14.50, 0, TRUE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The House in the Cerulean Sea', 'TJ Klune', '', 18.45, 0, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Reckless', 'Luan Roberts', '', 11.75, 0, TRUE, FALSE, 1003);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Zero to One: Notes on Startups, or How to Build the Future', 'Peter Thiel', '',16.99, 0, TRUE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Startup Wife', 'Tahmima Anam', '', 27.90, 0, FALSE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Mind of the CEO: The World\'s Business Leaders', 'Jeffrey E. Garten', '', 29.99, 0, TRUE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The World\'s Business Cultures: How to Unlock Them', 'Barry Tomalin, Ma, Mike Nicks', '',12.44, 0, FALSE, FALSE, 1004);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Last Letter', 'Rebecca Yarros', '',12.99, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Every Summer After', 'Carley Fortune', '', 24.99, 0, FALSE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Pumpkin Spice Café', 'Laurie Gilmore', '', 18.99, 0, FALSE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Pickleballers', 'Ilana Long', '',15.99, 0, TRUE, FALSE, 1005);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Destinations of a Lifetime: Most Amazing Places', 'National Geographic', '',14.11, 0, FALSE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('National Geographic: Complete National Parks', 'National Geographic', '', 24.99, 0, TRUE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Best of Italy', 'Rick Steves', '', 18.99, 0, TRUE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Japan', 'Lonely Planet', '',21.99, 0, FALSE, FALSE, 1006);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Complete Mediterranean Cookbook', 'The Editors at America\'s Test Kitchen', '', 24.99, 0, TRUE, FALSE, 1007);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Complete Anti-Inflammatory Diet for Beginners', 'Dorothy Calimeris and Lulu Cook', '', 11.99, 0, FALSE, FALSE, 1007);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Big Vegan Flavor: Techniques and 150 Recipes', 'Nisha Vora', '', 49.00, 0, TRUE, FALSE, 1007);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Essentials of Classic Italian Cooking', 'Marcella Hazan', '',29.80, 0, TRUE, FALSE, 1007);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Alchemist', 'Yann Martel', '', 14.99, 0, TRUE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Life of Pi', 'Dorothy Calimeris and Lulu Cook', '', 12.98, 0, TRUE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Adventures of Tom Sawyer', 'Mark Twain', '', 8.75, 0, FALSE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Robin Hood: The Classic Adventure Tale', 'Nicky Raven', '', 5.97, 0, TRUE, FALSE, 1008);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('DIY Biogas: Build Your Own Biogas Plant', 'Paul Scheckel', '', 7.06, 0, TRUE, FALSE, 1009);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Master Basic DIY: Teach Yourself', 'DIY Doctor', '', 30.51, 0, FALSE, FALSE, 1009);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Building DIY Websites for Dummies', 'Mark Twain', '', 8.75, 0, FALSE, FALSE, 1009);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Fanzines: The DIY Revolution', 'Teal Triggs', '', 39.87, 0, TRUE, FALSE, 1009);