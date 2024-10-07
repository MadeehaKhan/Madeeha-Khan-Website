using mksite.Server.Models;

namespace mksite.Server.Data;

class ExperienceData
{
    public static readonly ExperienceListModel[] ProgrammingExperienceList =
    [
        new ExperienceListModel
        {
            Id = 1,
            Organization = "Being ME",
            Role = "IT Specialist",
            Duration = "Nov 2022 - Present",
            GeneralDescription =
                "Improving operations at a nonprofit organization enabling Muslim women to build and contribute to their communities.",
            ItemizedDescription =
            [
                "Managed the full project lifecycle from inception to deployment using Agile methodologies, ensuring timely delivery and alignment with business goals. Collaborating with cross-functional teams and two engineers, we implemented new website features and enhanced backend performance, site reliability, and scalability.",
                "Led front end development for the new Being ME Toronto website as a marketing tool and more effective means of communication with the community Being ME serves.",
            ],
            Link = "",
        },
        new ExperienceListModel
        {
            Id = 2,
            Organization = "Blue J Legal",
            Role = "Software Developer",
            Duration = "July 2021 - Oct 2022",
            GeneralDescription =
                "Providing specialized generative AI products for tax and legal experts.",
            ItemizedDescription =
            [
                "Innovated features on Blue J's flagship L&E product, delivering a simple and intuitive UI experience for our users in L&E, in-house counsel, and HR.",
                "Shipped a suite of powerful tools— enhancing case tracking, legal analysis, and annotation capabilities—  that aligned with market needs, leading to a measurable improvement in user retention.",
            ],
            Link = "https://www.bluej.com/",
        },
        new ExperienceListModel
        {
            Id = 3,
            Organization = "TATA Consultancy Services (TCS)",
            Role = "Frontend Lead Developer",
            Duration = "Jan 2020 - June 2021",
            GeneralDescription =
                "Providing customers across 55 countries with IT services, consulting, and business solutions.",
            ItemizedDescription =
            [
                "Led the UI Team in implementing the private & public customer intake processes for Bank of Montreal on the cloud through AWS; Improved user engagement by 20%.",
                "Drove the migration of BMO's Customer Intake, overseeing project timelines, coordinating other developers, and tracking project progress using Agile methodologies",
            ],
        },
        new ExperienceListModel
        {
            Id = 4,
            Organization = "Pillbox",
            Role = "Software Developer & Project Manager",
            Duration = "Sept 2018 - Sept 2019",
            GeneralDescription =
                "Mobile application providing users with an all-in-one tool to track and learn about their prescriptions.",
            ItemizedDescription =
            [
                "Conceptualized, pitched, planned, and implemented a personal prescription management system to help users to track their own health",
                "Implemented features to facilitate commuinication between patients and their immediate healthcare providers to maintain timeliness in recieving crucial care",
                "This project will return!",
            ],
        },
        new ExperienceListModel
        {
            Id = 5,
            Organization = "Microsoft",
            Role = "Program Manager Intern",
            Duration = "June 2018 - Aug 2018",
            GeneralDescription =
                "Providing customers in 190 countries with cloud computing, operating systems, and productivity tools.",
            ItemizedDescription =
            [
                "Designed and implemented a tagging tool with Teams, enabling customers to efficiently tag items, organize items, and streamline content management processes; Achieved widespread adoption within the first week of launch.",
                "Enabled more efficient tracking of R&D activities by redesigning an internal workflow visualization tool, tracking completion status on items and sending reminders to relevant personnel.",
            ],
            Link = "https://www.youtube.com/watch?v=9y5AchSAEJY",
        },
        new ExperienceListModel
        {
            Id = 6,
            Organization = "McMaster Computer Science (CS) Outreach",
            Role = "Software Developer",
            Duration = "April 2015 - April 2017",
            GeneralDescription =
                "Developed libraries and delivered lessons to teach students grades 2-10 about the basics of Computer Science.",
            ItemizedDescription =
            [
                "Developed a graphics library, minigames & template apps, and various other tools to aid in the McMaster CS Outreach research project",
            ],
            Link = "http://outreach.mcmaster.ca/",
        },
    ];

    public static readonly ExperienceListModel[] TeachingExperienceList =
    [
        new ExperienceListModel
        {
            Id = 1,
            Organization = "Summit Ridge Academy",
            Role = "Tutor",
            Duration = "May 2023 - Present",
            GeneralDescription =
                "Specializing in mathematics and phonics for neurodivergent students in elementary, middle, and high school.",
            ItemizedDescription =
            [
                "Independently planning lessons which target weaknesses in student's abilities based on competencies from the Ontario curriculum, adapting them based on performance in the session and feedback from the classroom.",
                "Working with students using science-based approaches for teaching (Science of Reading, JUMP Assessments) as well as managing the needs of students with developmental disorders to keep students engaged, confident, and focused.",
                "Providing comprehensive feedback and resources for families of students to keep them part of the learning process and log student progress for their family and teachers.",
            ],
        },
        new ExperienceListModel
        {
            Id = 2,
            Organization = "Beyond the Classroom",
            Role = "Tutor",
            Duration = "Sept 2022 - June 2023",
            GeneralDescription =
                "Academic support, test preparation, and homework help for various school subjects, working with students of various ages.",
            ItemizedDescription =
            [
                "Assessed student abilities to find their strengths and weaknesses in each subject to find a jumping off point and build their self-confidence.",
                "Clearly communicated educational plans with both students and their parents, in appropriate terms with each audience, in order to maintain clarity, trust, and to keep a log of student progress.",
                "Improved each student's overall grade in the relevant subject(s) thereby increasing their grades and setting them up for further challenges.",
            ],
        },
        new ExperienceListModel
        {
            Id = 3,
            Organization = "Muslim Children of North America (MCNA)",
            Role = "Teacher",
            Duration = "Sept 2012 - June 2014, Sept 2023 - June 2024",
            GeneralDescription =
                "Responsible for over 100 elementary and middle school-aged students, following a set curriculum and planning lessons to deliver faith-based teachings.",
            ItemizedDescription =
            [
                "Creating a detailed lesson plan for each week's class that flows with the rest of the semester's curriculum as well as administrative expectations.",
                "Keeping students engaged and active in the classroom by adapting as I learn about them and the best way to teach each student (ex. incorporating accessible options for activities, getting quieter students to engage verbally) to great praise from administration and parents.",
                "Leveraging technology (ex. Google Classroom, Kahoot) to keep in contact with parents regarding homework, assignments and quizzes, and individual student performance.",
            ],
        },
        new ExperienceListModel
        {
            Id = 4,
            Organization = "McMaster Learning Enrichment Advancement Program (LEAP)",
            Role = "Computer Science Instructor",
            Duration = "April 2017-August 2017",
            GeneralDescription =
                "Developing and delivering a curriculum for a summer camp for students grades 10-12 based on the basics of Computer Science.",
            ItemizedDescription =
            [
                "Led workshops for engineering and science in various high schools, creating excitement and interest in the LEAP Program for the summer.",
                "Working with a supervisor and partner to choose and plan skill-level appropriate activities for students to teach them about Computer Science. Ensured that curriculum was varied enough to retain students' interest, but cohesive enough that they would complete the camp with a solid skill set.",
                "Led classroom activities for the curriculum, making sure that students were engaged, respectful, and enjoying their time at LEAP.",
                "Expertly handled interruptions/changes to the lesson plans and inappropriate behaviours from students to create a safe, fun learning space.",
            ],
        },
        new ExperienceListModel
        {
            Id = 5,
            Organization = "McMaster Computer Science (CS) Outreach",
            Role = "Workshop Leader",
            Duration = "April 2015 - April 2017",
            GeneralDescription =
                "Developed and led workshops designed to teach students grades 2-10 about the basics of Computer Science.",
            ItemizedDescription =
            [
                "Worked with the program head and to develop activities for a workshop that could accommodate a variety of age groups and abilities.",
                "Engaged students in workshop activities, aiding them where needed and adapting activities on the fly when they did not seem to work for a particular group of students.",
            ],
        },
    ];

    public readonly ExperienceModel TeachingExperience =
        new()
        {
            Title = "Teacher",
            Introduction = "",
            ExperienceList = TeachingExperienceList,
        };

    public readonly ExperienceModel ProgrammingExperience =
        new()
        {
            Title = "Software Developer",
            Introduction = "",
            ExperienceList = ProgrammingExperienceList,
            CoreCompetencies = ["React", "Angular"],
        };
}
