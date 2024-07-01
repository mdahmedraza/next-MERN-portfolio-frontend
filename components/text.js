/*
for using tailwind in your 'nextjs' project go to 'tailwind' site click or 'get started' go to
'framework guide' click to the 'nextjs' go to terminal and run this code-
'npm install -D tailwindcss postcss autoprefixer' and then in terminal 'npx tailwindcss init -p',
and follow all the instruction related to that guide....

some base style which is ganna be apply over all the project is-
in 'globals.css'-
@layer base{
  body{
    @apply bg-[#ecf0f3] text-[#1f2937] tracking-wide
  }
  h1, h2, h3, h4, h5, h6{
    @apply font-bold
  }
  h1{
    @apply text-4xl sm:text-5xl md:text-6xl
  }
  h2{
    @apply text-3xl sm:text-4xl
  }
  li{
    @apply cursor-pointer
  }
  button{
    @apply shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white
  }
}

for using 'react-icons' go to this site and run this command in terminal-
'npm install react-icons --save'
and for using this 'import { FaBeer } from 'react-icons/fa';'
this is not working why...instead let' use heroicons this is good...

for smooth scrolling.....
in globals.css...
html{
  scroll-behavior: smooth;
}
or in About.jsx...
in parent div give and id of about...
and do the same process with all 'Contact.jsx', 'Main.jsx', 'Projects.jsx', 'Skills.jsx'...
and in the 'Navbar.jsx' give the path whth '#' in Links......
*/