import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.scss'],
})
export class JobProfileComponent implements OnInit {
  resData: any = {};
  @Input() itemData?: any = {};
  @Output() itemSelected = new EventEmitter<any>(); 

  constructor(private https:HttpClient) { }

  ngOnInit() {
    this.searchJobs();
    if (this.resData?.results && this.resData.results.length > 0) {
      this.itemSelected.emit(this.resData.results[0]); 
    }
  }

  searchJobs() {
    this.resData = {
      "count": 3,
      "results": [
        {
          "jobNumber": "JOB00000000000088",
          "title": "SDT 2",
          "score": 67.0,
          "skill": {
            "level": "Medium",
            "score": 54.0
          },
          "experience": {
            "level": "Low",
            "score": 6.0
          },
          "category": {
            "level": "Medium",
            "score": 2.0
          },
          "location": {
            "level": "High",
            "score": 5.0
          },
          "certifications": null,
          "qualification": {
            "level": "Low",
            "score": 0.0
          },
          "jobDescriptionContent": {
            "level": "Low",
            "score": 0.0
          },
          "skillOverview": {
            "matched": [
              "C#",
              "Java",
              "Azure",
              "MySQL",
              "HTML/CSS"
            ],
            "missing": []
          },
          "searchData": {
            "reyfer_id": "JOB00000000000088",
            "job_title": "SDT 2",
            "job_description_type": "Text",
            "job_description_text": "Seeking an experienced Software Engineer passionate about fast-paced, startup-like environments, ready to tackle challenging timelines and be a key player in product development.A strong skill set in full-stack .NET development, proficient in C#, Azure, Angular, and various client-side technologies such as JavaScript/TypeScript, HTML5, and CSS3, Proven leadership skills, project management experience, leadership abilities, problem-solving abilities, good organisation skills and technical skills",
            "user_reyfer_id": "U00000000000038",
            "job_category": "Financial Services",
            "job_type": "Contract",
            "work_type": "Remote",
            "min_experience": 1,
            "max_experience": 11,
            "annual_salary": 600000,
            "skills": "C#, Java, Azure, MySQL, HTML/CSS",
            "qualification": "A Bachelor of Engineering",
            "certifications": null,
            "location": "Hyderabad",
            "designation": "Software Engineer",
            "company_reyfer_id": null,
            "company_name": "Reyfer Jobs",
            "company_website": "ReyferJobs.com",
            "company_profile": "Reyfer Jobs company profile",
            "company_job_id": "N/A",
            "job_status": null,
            "created_date": "2024-03-10T10:51:43.016Z",
            "modified_date": "2024-03-10T10:51:43.016Z",
            "time_span": "3 days ago",
            "keyphrases": [
              "experienced Software Engineer",
              "various client-side technologies",
              "project management experience",
              "good organisation skills",
              "full-stack .NET development",
              "Proven leadership skills",
              "technical skills",
              "product development",
              "leadership abilities",
              "startup-like environments",
              "challenging timelines",
              "key player",
              "strong skill",
              "problem-solving abilities",
              "Azure",
              "Angular",
              "JavaScript/TypeScript",
              "HTML",
              "CSS"
            ]
          }
        },
        {
          "jobNumber": "JOB00000000000087",
          "title": "SDT 2",
          "score": 65.0,
          "skill": {
            "level": "Medium",
            "score": 54.0
          },
          "experience": {
            "level": "Low",
            "score": 6.0
          },
          "category": {
            "level": "Low",
            "score": 0.0
          },
          "location": {
            "level": "High",
            "score": 5.0
          },
          "certifications": null,
          "qualification": {
            "level": "Low",
            "score": 0.0
          },
          "jobDescriptionContent": {
            "level": "Low",
            "score": 0.0
          },
          "skillOverview": {
            "matched": [
              "C#",
              "Java",
              "Azure",
              "MySQL",
              "HTML/CSS"
            ],
            "missing": []
          },
          "searchData": {
            "reyfer_id": "JOB00000000000087",
            "job_title": "SDT 2",
            "job_description_type": "Text",
            "job_description_text": "Seeking an experienced Software Engineer passionate about fast-paced, startup-like environments, ready to tackle challenging timelines and be a key player in product development.A strong skill set in full-stack .NET development, proficient in C#, Azure, Angular, and various client-side technologies such as JavaScript/TypeScript, HTML5, and CSS3, Proven leadership skills, project management experience, leadership abilities, problem-solving abilities, good organisation skills and technical skills",
            "user_reyfer_id": "U00000000000038",
            "job_category": "IT Services & Consulting",
            "job_type": "Contract",
            "work_type": "Remote",
            "min_experience": 1,
            "max_experience": 11,
            "annual_salary": 600000,
            "skills": "C#, Java, Azure, MySQL, HTML/CSS",
            "qualification": "A Bachelor of Engineering",
            "certifications": null,
            "location": "Hyderabad",
            "designation": "Software Engineer",
            "company_reyfer_id": null,
            "company_name": "Reyfer Jobs",
            "company_website": "ReyferJobs.com",
            "company_profile": "Reyfer Jobs company profile",
            "company_job_id": "N/A",
            "job_status": null,
            "created_date": "2024-03-10T10:44:09.344Z",
            "modified_date": "2024-03-10T10:44:09.344Z",
            "time_span": "3 days ago",
            "keyphrases": [
              "experienced Software Engineer",
              "various client-side technologies",
              "project management experience",
              "good organisation skills",
              "full-stack .NET development",
              "Proven leadership skills",
              "technical skills",
              "product development",
              "leadership abilities",
              "startup-like environments",
              "challenging timelines",
              "key player",
              "strong skill",
              "problem-solving abilities",
              "Azure",
              "Angular",
              "JavaScript/TypeScript",
              "HTML",
              "CSS"
            ]
          }
        },
        {
          "jobNumber": "JOB00000000000090",
          "title": "SDT 2",
          "score": 65.0,
          "skill": {
            "level": "Medium",
            "score": 54.0
          },
          "experience": {
            "level": "Low",
            "score": 6.0
          },
          "category": {
            "level": "Low",
            "score": 0.0
          },
          "location": {
            "level": "High",
            "score": 5.0
          },
          "certifications": null,
          "qualification": {
            "level": "Low",
            "score": 0.0
          },
          "jobDescriptionContent": {
            "level": "Low",
            "score": 0.0
          },
          "skillOverview": {
            "matched": [
              "C#",
              "Java",
              "Azure",
              "MySQL",
              "HTML/CSS"
            ],
            "missing": []
          },
          "searchData": {
            "reyfer_id": "JOB00000000000090",
            "job_title": "SDT 2",
            "job_description_type": "File",
            "job_description_text": "Seeking an experienced Software Engineer passionate about fast-paced, startup-like environments, ready to tackle challenging timelines and be a key player in product development.A strong skill set in full-stack .NET development, proficient in C#, Azure, Angular, and various client-side technologies such as JavaScript/TypeScript, HTML5, and CSS3, Proven leadership skills, project management experience, leadership abilities, problem-solving abilities, good organisation skills and technical skills\r\n\r\n",
            "user_reyfer_id": "U00000000000038",
            "job_category": "IT Services & Consulting",
            "job_type": "Contract",
            "work_type": "Remote",
            "min_experience": 1,
            "max_experience": 11,
            "annual_salary": 600000,
            "skills": "C#, Java, Azure, MySQL, HTML/CSS",
            "qualification": "A Bachelor of Engineering",
            "certifications": null,
            "location": "Hyderabad",
            "designation": "Software Engineer",
            "company_reyfer_id": null,
            "company_name": "Reyfer Jobs",
            "company_website": "ReyferJobs.com",
            "company_profile": "Reyfer Jobs company profile",
            "company_job_id": "N/A",
            "job_status": null,
            "created_date": "2024-03-11T17:29:40.715Z",
            "modified_date": "2024-03-11T17:29:40.715Z",
            "time_span": "2 days ago",
            "keyphrases": [
              "experienced Software Engineer",
              "various client-side technologies",
              "project management experience",
              "good organisation skills",
              "full-stack .NET development",
              "Proven leadership skills",
              "technical skills",
              "product development",
              "leadership abilities",
              "startup-like environments",
              "challenging timelines",
              "key player",
              "strong skill",
              "problem-solving abilities",
              "Azure",
              "Angular",
              "JavaScript/TypeScript",
              "HTML",
              "CSS"
            ]
          }
        }
      ]
    }
    this.itemData = this.resData.results[0];
    // const payload = {
    //   "search": {
    //     "skills": "C#, Java, Azure, MySQL, HTML/CSS",
    //     "experience": "10",
    //     "location": "Hyderabad",
    //     "job_category": "Financial Services",
    //     "certifications": "",
    //     "qualification": "A Bachelor of Engineering",
    //     "user_id": "U00000000000038",
    //     "user_resume_file": "resume-001.pdf"
    //   },
    //   "pageRequest": {
    //     "size": 10,
    //     "index": 1
    //   }
    // };
    // this.https.post<any>('https://rj-dev-azsearch.azurewebsites.net/api/JobSearch', payload).subscribe((res: any) => {
    //   this.resData = res;
    //   this.itemData = this.resData.results[0];
    //   console.log(res);
    // },
    //   (error: any) => {
    //     alert(error);
    //     console.error(error);
    //   })
  }

  profileClick(item: any) {
    this.itemSelected.emit(item); 
  }
}





