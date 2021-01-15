import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  
  mainMembers = [
    {
      name: 'John Berti',
      avatar_url: '../assets/images/our-team/profile-john.jpg',
      role: 'Co-founder & Master Instructor',
      company: 'CCSP, CISSP, SSCP, CISM',
      mail: 'john@destcert.com',
      linkedin_url: 'https://www.linkedin.com/in/jberti/',
      summary: 'John is one of the driving forces behind the success of the Destination Certification CISSP program. With over 25 years in the field, a wealth of global experience, and an exceptional ability to make complex topics simple, John brings the CISSP concepts to life through out of the box teaching approaches which lead to our industry-high exam success rates.',
      summary_ext: 'John is one of Canada’s leading Information Security professionals with outstanding credentials:',
      summary_details: [
        'Over 25 years of Cyber Risk and Security experience in the industry.',
        '20 years of practical involvement, experience with, and providing advice to (ISC)2.',
        'Co-authored the best-selling CISSP exam preparation guide, ‘Official (ISC)2 Guide to the CISSP Exam.’',
        'Relevant involvement in helping (ISC)2 develop materials for the official CISSP curriculum, and sample CISSP exam questions.'
      ],
      summary_end: [
        'John has facilitated hundreds of seminars worldwide and quite literally wrote the book on CISSP exam preparation.'
      ]
    },
    {
      name: 'Rob Witcher',
      avatar_url: '../assets/images/our-team/profile-rob.jpg',
      role: 'Co-founder & Master Instructor',
      company: 'CCSP, CISSP, CCSK, CISM, CISA, CSX-P, CIPM, MCSE:Security, PMP',
      mail: 'rob@destcert.com',
      linkedin_url: 'https://www.linkedin.com/in/robwitcher/',
      summary: 'Rob is the other driving force behind the success of the Destination Certification CISSP program. He is technical wizard directing the creation of the integrated intelligent learning system.',
      summary_ext: 'Rob has over 15 years of intense security, privacy, and cloud assurance experience, including:',
      summary_details: [
        'Guiding multiple companies in responding to and recovering from (global headline level) security & privacy breaches',
        'Leading PCI readiness engagements, SOC2 audits, cloud assessments & security maturity reviews',
        'Managing the development of multi-year security strategies & enterprise-wide privacy operating models',
        'Acting as the CIO of a global mining company'
      ],
      summary_end: [
        'Rob has delivered dozens of CCSP, CISSP, and ISACA classes globally over the last 5 years.',
        'Rob is a dedicated and creative instructor who is deeply invested in the success of our students. He brings an entertaining delivery style that is grounded in years of experience and a deep understanding of what is required for success on the CISSP exam.']
    }
  ];

  otherMembers = [
    {
      name: 'Yasha Khandelwal',
      avatar_url: '../assets/images/our-team/profile-yasha.jpg',
      role: 'Senior Developer',
      mail: 'yasha@destcert.com',
      site_url: 'https://scientificthinking.org/',
      summary: 'Yasha has worked with multiple fortune 500 companies including Cisco, Google, and currently Tesla as a researcher.',
      summary_ext: [
        'She is passionate about Maths and Physics and is the happiest learning and applying algorithmic concepts.',
        'She is proud of the intelligent integrated system she has engineered, and the infrastructure and machine learning algorithms that make it work. Yasha hopes our students enjoy using our system to learn as much as she enjoyed developing it.'
      ]
    },
    {
      name: 'Lou Hablas',
      avatar_url: '../assets/images/our-team/profile-lou.png',
      role: 'Community Champion & Course Developer',
      mail: 'lou@destcert.com',
      site_url: '',
      summary: 'Lou Hablas has worked with multiple fortune 500 companies including Cisco, Google, and currently Tesla as a researcher.',
      summary_ext: [
        'He is passionate about Maths and Physics and is the happiest learning and applying algorithmic concepts.',
        'He is proud of the intelligent integrated system she has engineered, and the infrastructure and machine learning algorithms that make it work. Yasha hopes our students enjoy using our system to learn as much as she enjoyed developing it.'
      ]
    },
    {
      name: 'Vinod Kumar Palli',
      avatar_url: '../assets/images/our-team/profile-vinod.jpg',
      role: 'Expert UX/UI Designer',
      mail: 'vinlancer06@gmail.com',
      site_url: 'https://www.behance.net/vinodkumarpalli',
      summary: 'Vinod has worked with multiple fortune 500 companies including Cisco, Google, and currently Tesla as a researcher.',
      summary_ext: [
        'He is passionate about Maths and Physics and is the happiest learning and applying algorithmic concepts.',
        'He is proud of the intelligent integrated system she has engineered, and the infrastructure and machine learning algorithms that make it work. Yasha hopes our students enjoy using our system to learn as much as she enjoyed developing it.'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
