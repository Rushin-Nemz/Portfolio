import React from 'react';
import "./Experience.scss";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkIcon from '@mui/icons-material/Work';


const Experience = () => {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2004 - 2019"
                iconStyle={{background:"#3e497a", color:"white"}}
                icon={<ApartmentIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>St. Xaviers High School, Surat, Gujarat</h3>
                    <p>Primary and Secondary Education 10 + 2</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" date="2019 - 2023"
                iconStyle={{background:"#3e497a", color:"white"}}
                icon={<SchoolIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>Symbiosis Institute Of Technology, Lavale, Pune
                    Bachelor's Degree</h3>
                    <p>Computer Science And Engineering</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" date="2023 - present"
                iconStyle={{background:"#e9d35b", color:"white"}}
                icon={<WorkIcon/>}
                >
                    <h3 className='vertical-timeline-element-title'>Toshal Infotech, Surat, Gujarat <br /> Internship</h3>
                    <p>Web Development</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience
