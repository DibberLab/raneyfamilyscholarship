<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raney Family Scholarship | Vermont Camp Opportunities</title>
    <style>
        :root {
            --forest-green: #2d5a27;
            --earth-brown: #5d4037;
            --sky-blue: #e3f2fd;
            --soft-white: #fafafa;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: #333;
            background-color: var(--soft-white);
        }

        header {
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                        url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1200');
            background-size: cover;
            background-position: center;
            height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            padding: 20px;
        }

        header h1 {
            font-size: 3.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        header p {
            font-size: 1.2rem;
            max-width: 600px;
        }

        .container {
            max-width: 1000px;
            margin: -50px auto 50px;
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .section {
            margin-bottom: 40px;
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
        }

        h2 {
            color: var(--forest-green);
            border-left: 5px solid var(--forest-green);
            padding-left: 15px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }

        .camp-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 6px;
        }

        .cta-button {
            display: inline-block;
            background-color: var(--forest-green);
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background 0.3s;
        }

        .cta-button:hover {
            background-color: #1e3d1a;
        }

        footer {
            text-align: center;
            padding: 40px;
            font-size: 0.9rem;
            color: #777;
        }
    </style>
</head>
<body>

    <header>
        <h1>Raney Family Scholarship</h1>
        <p>Empowering the next generation of campers to explore the beauty of Vermont's wilderness.</p>
    </header>

    <div class="container">
        
        <section class="section">
            <h2>Our Mission</h2>
            <p>The Raney Family Scholarship was established to provide financial assistance to students and families wishing to attend summer programs in Vermont. We believe that every child should have the opportunity to experience the personal growth, friendships, and outdoor skills that come with a summer at camp.</p>
        </section>

        <section class="section">
            <div class="grid">
                <div>
                    <h2>Who Can Apply?</h2>
                    <ul>
                        <li>Students aged 8–16.</li>
                        <li>Families demonstrating financial need.</li>
                        <li>Applicants with a passion for the outdoors and community.</li>
                        <li>Residents of Vermont and neighboring states.</li>
                    </ul>
                </div>
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600" alt="Summer Camp Activity" class="camp-image">
            </div>
        </section>

        <section class="section" style="text-align: center; border-bottom: none;">
            <h2>Ready to Start Your Journey?</h2>
            <p>Applications for the 2027 Summer Season are now open. Don't let financial barriers stand in the way of a life-changing experience.</p>
            <br>
            <a href="#" class="cta-button">Download Application Form</a>
        </section>

    </div>

    <footer>
        <p>&copy; 2026 Raney Family Scholarship. All Rights Reserved.</p>
        <p>Vermont | raneyfamilyscholarship.org</p>
    </footer>

</body>
</html>