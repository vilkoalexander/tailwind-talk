import { Component } from '@angular/core';

@Component({
  selector: 'app-scss',
  templateUrl: './scss.component.html',
  styleUrl: './scss.component.scss',
})
export class ScssComponent {
  users = [
    {
      name: 'John Doe',
      title: 'Software Engineer',
      description: 'Expert in backend development and cloud infrastructure.',
      email: 'john.doe@example.com',
      phone: '+1234567890',
    },
    {
      name: 'Jane Smith',
      title: 'Frontend Developer',
      description:
        'Specializes in building responsive and interactive web applications.',
      email: 'jane.smith@example.com',
      phone: '+1234567891',
    },
    {
      name: 'Emily Johnson',
      title: 'Data Scientist',
      description:
        'Experienced in machine learning, data analysis, and big data technologies.',
      email: 'emily.johnson@example.com',
      phone: '+1234567892',
    },
    {
      name: 'Michael Brown',
      title: 'DevOps Engineer',
      description: 'Skilled in CI/CD, automation, and cloud services.',
      email: 'michael.brown@example.com',
      phone: '+1234567893',
    },
    {
      name: 'Sarah Davis',
      title: 'Product Manager',
      description:
        'Proficient in product lifecycle management and agile methodologies.',
      email: 'sarah.davis@example.com',
      phone: '+1234567894',
    },
    {
      name: 'David Wilson',
      title: 'UX/UI Designer',
      description:
        'Expert in user experience design and user interface development.',
      email: 'david.wilson@example.com',
      phone: '+1234567895',
    },
    {
      name: 'Laura Martinez',
      title: 'Quality Assurance Engineer',
      description:
        'Specializes in software testing and quality assurance processes.',
      email: 'laura.martinez@example.com',
      phone: '+1234567896',
    },
    {
      name: 'Robert Taylor',
      title: 'Full Stack Developer',
      description: 'Experienced in both frontend and backend development.',
      email: 'robert.taylor@example.com',
      phone: '+1234567897',
    },
    {
      name: 'Linda Anderson',
      title: 'Mobile Developer',
      description:
        'Skilled in developing native and hybrid mobile applications.',
      email: 'linda.anderson@example.com',
      phone: '+1234567898',
    },
    {
      name: 'James Thomas',
      title: 'Business Analyst',
      description:
        'Proficient in business analysis, requirements gathering, and process improvement.',
      email: 'james.thomas@example.com',
      phone: '+1234567899',
    },
  ];
}
