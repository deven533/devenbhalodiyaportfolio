<div align="center">

  # Hi there, I'm Deven! 👋
  
  ### 🎨 UI/UX Designer  
  *Turning complex problems into simple, beautiful designs.*
  
  ---
  
  ## 🚀 View My Work
  
  <a href="https://devenbhalodiyaportfolio.netlify.app">
    <img src="https://img.shields.io/badge/My_Portfolio-FF5722?style=for-the-badge&logo=dribbble&logoColor=white" height="40" />
  </a>
  <a href="https://www.behance.net/YOUR_USERNAME">
    <img src="https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white" height="40" />
  </a>

  <br />

  <a href="https://www.linkedin.com/in/YOUR_USERNAME">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://instagram.com/YOUR_USERNAME">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
  </a>
  <a href="devenp706@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>

</div>

---

### 🛠️ Design & Tech Stack
As a UI/UX designer who knows code, here are the tools I use daily:

<div align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=figma,xd,ai,ps,wordpress,html,css,bootstrap,js" />
  </a>
</div>

---

### 📊 GitHub Stats
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB_USERNAME&show_icons=true&theme=radical&hide_border=true" height="150" alt="stats graph"  />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_GITHUB_USERNAME&layout=compact&theme=radical&hide_border=true" height="150" alt="languages graph" />
</div>


/* Gmail*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gmail Direct Link</title>
    <style>
        /* CSS: Styling the Button */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f2f5;
        }

        .gmail-button {
            background-color: #EA4335; /* Gmail Red */
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: background-color 0.3s ease, transform 0.1s ease;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            text-decoration: none; /* In case you use an <a> tag */
        }

        .gmail-button:hover {
            background-color: #d93025;
        }

        .gmail-button:active {
            transform: scale(0.98);
        }

        /* Optional: Icon style */
        .icon {
            font-size: 1.2em;
        }
    </style>
</head>
<body>

    <button id="sendEmailBtn" class="gmail-button">
        <span class="icon">&#9993;</span> Send Direct Email
    </button>

    <script>
        // JS: Building the Logic
        document.getElementById('sendEmailBtn').addEventListener('click', function() {
            
            // 1. Define your email details here
            const recipient = "example@gmail.com";
            const subject = "Project Inquiry";
            const body = "Hello,\n\nI would like to discuss a new project with you.\n\nBest regards.";

            // 2. Create the Gmail specific URL
            // view=cm -> Compose Mode
            // fs=1 -> Full Screen
            // to, su, body -> Parameters
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // 3. Open in a new tab
            window.open(gmailUrl, '_blank');
        });
    </script>

</body>
</html>
