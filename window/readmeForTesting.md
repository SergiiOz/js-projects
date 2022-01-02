For testin -> use server MAMP
before install MAMP on Mac

1. create directory 'test' in 'Aplications -> MAMP -> htdocs'

2. into project 'window' in file gulpfile.js create temporary copy variable 'dist'
   const dist = '/Applications/MAMP/htdocs/test';
   //const dist = '/dist/' - is commented temporary

3. in command line -> for run project -> write:
   gulp

4. run MAMP -> select 'My Website' -> select 'test/'

Success! And we can testin our project
