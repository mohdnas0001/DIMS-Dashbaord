import { useState, useRef } from "react";
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill';

function AdminResource() {
    // Main switch for between all the pages
    const [swch, setswch] = useState(null);
    const swchReminder = useRef();
    //switch for just the courses page per level
    const [courseSwch, setCourseSwch] = useState(0);
    const [swchAction, setswchAction] = useState(0);
    const [smt, setSmt] = useState(0);
    const [semesterr, setSemesterr] = useState('First');
    const [value, setValue] = useState('');

    const level = [
        [[{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}], [{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Programming', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}]],
        [[{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}], [{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Programming', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}]],
        [[{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}], [{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Programming', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}]],
        [[{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}], [{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Programming', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}]],
        [[{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}], [{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Programming', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}]],
    ]

    function select(idx) {
        setswch(idx);
        setswchAction(idx)
        swchReminder.current = idx;
    }

    function semester(event) {
        let temp = event.target.value;
        temp = temp.split(",");
        setSemesterr(temp[0]);
        setSmt(Number(temp[1]));
    }

    function addCourses () {
        setswch(null);
        setCourseSwch(1);
    }

    function saveCourses () {
        setswch(swchReminder.current);
        setCourseSwch(0);
    }

    return (
        <section className={`${(swch === null) ? 'aspect-[1/0.3]' : ''} w-[100%] flex flex-col justify-between`}>
            {(swch === null)  && (courseSwch === 0) ?
                <p className="text-[2.5vw] font-[Montserrat] font-semibold">Add Resources</p>
            :
                <div className={`${(courseSwch === 0) ? 'flex' : 'hidden'} flex-col w-[100%] aspect-[1/0.1] justify-between`}>
                    <div className="flex flex-row justify-between w-[100%] h-[45%]">
                        <p className="text-[2.5vw] font-[Montserrat] font-semibold">Add Resources</p>
                        <button onClick={addCourses} className="w-[17%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[1.3vw] font-[Montserrat] font-semibold">Add Resources</button>
                    </div>
                    <div className="flex flex-row justify-between items-center w-[100%] h-[45%]">
                        <p className="text-[1.7vw] font-[Montserrat] font-semibold text-[#0D659F]">{(swch === 0) ? '100 level Resources' : (swch === 1) ? '200 level Resources' : (swch === 2) ? '300 level Resources' : (swch === 3) ? '400 level Resources' : '500 level Resources'}</p>
                        <select onChange={semester} className="w-[17%] h-[60%] border border-black/50 bg-white text-[black] rounded-[2px] text-[1vw] font-[Montserrat] font-normal">
                            <option value="First,0" className="text-[1vw] font-[Montserrat] font-medium text-black" selected disabled hidden>{(swch === 0) ? '100 first semester' : (swch === 1) ? '200 first semester' : (swch === 2) ? '300 first semester' : (swch === 3) ? '400 first semester' : '500 first semester'}</option>
                            <option value="First,0" className="text-[1vw] font-[Montserrat] font-medium text-black">{(swch === 0) ? '100 first semester' : (swch === 1) ? '200 first semester' : (swch === 2) ? '300 first semester' : (swch === 3) ? '400 first semester' : '500 first semester'}</option>
                            <option value="Second,1" className="text-[1vw] font-[Montserrat] font-medium text-black">{(swch === 0) ? '100 second semester' : (swch === 1) ? '200 second semester' : (swch === 2) ? '300 second semester' : (swch === 3) ? '400 second semester' : '500 second semester'}</option>
                        </select>
                    </div>
                </div>
            }
            <div className={`${(swch === null) && (courseSwch === 0) ? 'flex' : 'hidden'} h-[70%] w-[100%] flex-row flex-wrap gap-x-[2%] gap-y-[10%]`}>
                <div onClick={()=> select(0)} className="bg-[#0D659F] w-[23%] h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[1.5vw] font-semibold text-white font-[Montserrat]">100 level</p>
                    <p className="text-[2.2vw] font-semibold text-white font-[Montserrat]"><span>{level[0][0].length + level[0][1].length}</span> Resources</p>
                </div>
                <div onClick={()=> select(1)} className="bg-white w-[23%] h-[45%] rounded-[8px] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[1.5vw] font-semibold text-[#0D659F] font-[Montserrat]">200 level</p>
                    <p className="text-[2.2vw] font-semibold text-[#0D659F] font-[Montserrat]"><span>{level[1][0].length + level[1][1].length}</span> Resources</p>
                </div>
                <div onClick={()=> select(2)} className="bg-[#0D659F] w-[23%] h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[1.5vw] font-semibold text-white font-[Montserrat]">300 level</p>
                    <p className="text-[2.2vw] font-semibold text-white font-[Montserrat]"><span>{ level[2][0].length + level[2][1].length}</span> Resources</p>
                </div>
                <div onClick={()=> select(3)} className="bg-white w-[23%] h-[45%] rounded-[8px] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[1.5vw] font-semibold text-[#0D659F] font-[Montserrat]">400 level</p>
                    <p className="text-[2.2vw] font-semibold text-[#0D659F] font-[Montserrat]"><span>{level[3][0].length + level[3][1].length}</span> Resources</p>
                </div>
                <div onClick={()=> select(4)} className="bg-[#0D659F] w-[23%] h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[1.5vw] font-semibold text-white font-[Montserrat]">500 level</p>
                    <p className="text-[2.2vw] font-semibold text-white font-[Montserrat]"><span>{level[4][0].length + level[4][1].length}</span> Resources</p>
                </div>
            </div>
            <div className={`${(swch === null) ? 'hidden' : 'flex'} border-t border-x w-[100%] flex flex-col pt-[3%]`}>
                <div className="w-[100%] flex flex-row gap-x-[10%] pl-[2%]">
                    <p className="text-[1vw] font-normal text-black font-[Montserrat]">{semesterr} semester courses</p>
                    <div className="px-[1.5%] bg-[#F9F5FF] rounded-[3vw]">
                        <p className="text-[1vw] font-semibold text-[#6941C6] font-[Montserrat]">{level[swchAction][smt].length} Courses</p>
                    </div>
                </div>
                <div className="w-[100%] mt-[2%] flex flex-row">
                    <div className="w-[15%] flex flex-col">
                        <div className="w-[100%] aspect-[1/0.3] bg-[#F9FAFB] flex justify-center items-center border-b">
                            <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Lecturer info</p>
                        </div>
                        {level[swchAction][smt].map((data)=>(
                            <div className="w-[100%] aspect-[1/0.37] flex flex-row justify-between items-center px-[5%] border-b ">
                                <div style={{ background: `url(${data.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[25%] aspect-square rounded-[50%]"></div>
                                <div className="w-[65%] h-[70%] flex flex-col justify-between">
                                    <p className="text-[1vw] font-medium text-black font-[Montserrat]">{data.name}</p>
                                    <p className="text-[0.9vw] font-normal text-[#667085] font-[Montserrat]">{data.link}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-[10%] flex flex-col">
                        <div className="w-[100%] aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                            <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Status</p>
                        </div>
                        {level[swchAction][smt].map((data)=>(
                            <div className="w-[100%] aspect-[1/0.555] border-b flex justify-center items-center">
                                <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw] bg-[#ECFDF3]">
                                    <div className="w-[10%] aspect-square">
                                        <svg viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" fill="#027A48"/>
                                        </svg>
                                    </div>
                                    <p className="text-[0.9vw] font-medium text-[#027A48] font-[Montserrat]">{data.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-[18%] flex flex-col">
                        <div className="w-[100%] aspect-[1/0.25] bg-[#F9FAFB] flex justify-center items-center border-b">
                            <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Course Title</p>
                        </div>
                        {level[swchAction][smt].map((data)=>(
                            <div className="w-[100%] aspect-[1/0.307] border-b flex justify-center items-center">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">{data.course}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-[9%] flex flex-col">
                        <div className="w-[100%] aspect-[1/0.5] bg-[#F9FAFB] flex justify-center items-center border-b">
                            <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Course unit</p>
                        </div>
                        {level[swchAction][smt].map((data)=>(
                            <div className="w-[100%] aspect-[1/0.615] border-b flex justify-center items-center">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">{data.unit}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-[18%] flex flex-col">
                        <div className="w-[100%] aspect-[1/0.25] bg-[#F9FAFB] flex justify-center items-center border-b">
                            <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Lecturer day & date</p>
                        </div>
                        {level[swchAction][smt].map((data)=>(
                            <div className="w-[100%] aspect-[1/0.307] flex items-center justify-center gap-x-[3%] border-b">
                                <div className="w-[50%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw] bg-[#F7FBFF]">
                                    <p className="text-[0.9vw] font-medium text-[#000066] font-[Montserrat]">{data.schedule[0]}</p>
                                </div>
                                <div className="w-[35%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw] bg-[#EFF8FF]">
                                    <p className="text-[0.9vw] font-semibold text-[#175CD3] font-[Montserrat]">{data.schedule[1]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-[10%] flex flex-col">
                        <div className="w-[100%] aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                            <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Course code</p>
                        </div>
                        {level[swchAction][smt].map((data)=>(
                            <div className="w-[100%] aspect-[1/0.55] border-b flex justify-center items-center">
                                <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw]">
                                    <p className="text-[0.9vw] font-semibold text-[#667085] font-[Montserrat]">{data.code}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-[10%] flex flex-col">
                        <div className="w-[100%] aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                            <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Venue</p>
                        </div>
                        {level[swchAction][smt].map((data)=>(
                            <div className="w-[100%] aspect-[1/0.55] border-b flex justify-center items-center">
                                <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw]">
                                    <p className="text-[0.9vw] font-semibold text-[#667085] font-[Montserrat]">{data.venue}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-[10%] flex flex-col">
                        <div className="w-[100%] aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                            
                        </div>
                        {level[swchAction][smt].map(()=>(
                            <div className="w-[100%] aspect-[1/0.55] border-b flex justify-center items-center gap-x-[20%]">
                                <div className="w-[20%] aspect-square">
                                    <svg viewBox="0 0 20 20" fill="none">
                                        <g id="trash-2">
                                            <path id="Icon" d="M2.5 5.00033H4.16667M4.16667 5.00033H17.5M4.16667 5.00033V16.667C4.16667 17.109 4.34226 17.5329 4.65482 17.8455C4.96738 18.1581 5.39131 18.3337 5.83333 18.3337H14.1667C14.6087 18.3337 15.0326 18.1581 15.3452 17.8455C15.6577 17.5329 15.8333 17.109 15.8333 16.667V5.00033H4.16667ZM6.66667 5.00033V3.33366C6.66667 2.89163 6.84226 2.46771 7.15482 2.15515C7.46738 1.84259 7.89131 1.66699 8.33333 1.66699H11.6667C12.1087 1.66699 12.5326 1.84259 12.8452 2.15515C13.1577 2.46771 13.3333 2.89163 13.3333 3.33366V5.00033M8.33333 9.16699V14.167M11.6667 9.16699V14.167" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="w-[20%] aspect-square">
                                    <svg viewBox="0 0 20 20" fill="none">
                                        <g id="edit-2" clip-path="url(#clip0_2230_8556)">
                                            <path id="Icon" d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2230_8556">
                                                <rect width="20" height="20" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`${(courseSwch === 0) ? 'hidden' : 'flex'} flex-col w-[100%] gap-y-[4%]`}>
                <div className={`flex flex-col w-[100%] aspect-[1/0.05] justify-between`}>
                    <div className="flex flex-row justify-between w-[100%] h-[100%]">
                        <p className="text-[2.5vw] font-[Montserrat] font-semibold">Add Courses</p>
                        <button onClick={saveCourses} className="w-[17%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[1.3vw] font-[Montserrat] font-semibold">Save courses</button>
                    </div>
                </div>
                <div className="w-[100%] aspect-[1/0.68] flex flex-col gap-y-[3%]">
                    <p className="text-[2vw] font-[Montserrat] font-semibold">Courses info</p>
                    <form className="flex flex-row flex-wrap w-[100%] h-[25%] gap-y-[10%] gap-x-[2%]">
                        <div className="flex flex-col w-[30%] h-[45%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="courseTitle">Course Title</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[1vw] font-[Montserrat] text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="courseTitle" name="courseTitle" placeholder='Computer Networking'/>
                        </div>
                        <div className="flex flex-col w-[15%] h-[45%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="courseCode">Course Code</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[1vw] font-[Montserrat] text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="courseCode" name="courseCode" placeholder='IFT 383'/>
                        </div>
                        <div className="flex flex-col w-[15%] h-[45%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="courseUnit">Course unit</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[1vw] font-[Montserrat] text-[1vw] focus:outline-none focus:border focus:border-black" type="number" id="courseUnit" name="courseUnit" placeholder='3'/>
                        </div>
                        <div className="flex flex-col w-[15%] h-[45%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="matric">Time</label>
                            <select className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[5.2%] font-[Montserrat] text-black/45 checked:text-black text-[1vw] focus:outline-none focus:border focus:border-black" id="time" name="time">
                                <option selected disabled hidden value="male">12:00PM</option>
                                <option value="male">12:00PM</option>
                                <option value="female">1:00PM</option>
                                <option value="female">2:00PM</option>
                                <option value="female">3:00PM</option>
                                <option value="female">4:00PM</option>
                                <option value="female">5:00PM</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[15%] h-[45%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="day">Day</label>
                            <select className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[5.2%] font-[Montserrat] text-black/45 checked:text-black text-[1vw] focus:outline-none focus:border focus:border-black" id="day" name="day">
                                <option selected disabled hidden value="male">Monday</option>
                                <option value="male">Monday</option>
                                <option value="female">Tuesday</option>
                                <option value="female">Wednessday</option>
                                <option value="female">Thursday</option>
                                <option value="female">Friday</option>
                                <option value="female">Saturday</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[15%] h-[45%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="level">Level</label>
                            <select className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[5.2%] font-[Montserrat] text-black/45 checked:text-black text-[1vw] focus:outline-none focus:border focus:border-black" id="level" name="level">
                                <option selected disabled hidden value="male">100 Level</option>
                                <option value="male">100 Level</option>
                                <option value="female">200 Level</option>
                                <option value="female">300 Level</option>
                                <option value="female">400 Level</option>
                                <option value="female">500 Level</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[15%] h-[45%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="semester">Semester</label>
                            <select className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[5.2%] font-[Montserrat] text-black/45 checked:text-black text-[1vw] focus:outline-none focus:border focus:border-black" id="semester" name="semester">
                                <option value="First" className="text-[1vw] font-[Montserrat] font-medium text-black" selected disabled hidden>First Semester</option>
                                <option value="male">First Semester</option>
                                <option value="female">Second Semester</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[20%] h-[45%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="venue">Venue</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[1vw] font-[Montserrat] text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="venue" name="venue" placeholder='Course Venue'/>
                        </div>
                    </form>
                    <p className="text-[2vw] font-[Montserrat] font-semibold">Lecturer info</p>
                    <form className="flex flex-row flex-wrap w-[100%] h-[12%] gap-y-[10%] gap-x-[2%]">
                        <div className="flex flex-col w-[32%] h-[100%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="firstname">First Name</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[1vw] font-[Montserrat] text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="firstname" name="firstname" placeholder='Olivia'/>
                        </div>
                        <div className="flex flex-col w-[32%] h-[100%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="lastname">Last Name</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[1vw] font-[Montserrat] text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="lastname" name="lastname" placeholder='Rhiye'/>
                        </div>
                        <div className="flex flex-col w-[32%] h-[100%] justify-between">
                            <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="email">Email</label>
                            <input className="border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] placeholder:text-[1vw] font-[Montserrat] text-[1vw] focus:outline-none focus:border focus:border-black" type="email" id="email" name="email" placeholder='You@email.com'/>
                        </div>
                    </form>
                    <button className="w-[13%] h-[6%] flex flex-row items-center justify-center bg-[#FDF8FF] text-[#502369] font-[Montserrat] font-medium px-[1%] rounded-lg shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)]">
                        <div className="w-[20%] aspect-square">
                            <svg viewBox="0 0 24 24" fill="none">
                                <g id="vuesax/linear/add">
                                    <g id="add">
                                        <path id="Vector" d="M6 12H18" stroke="#502369" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path id="Vector_2" d="M12 18V6" stroke="#502369" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        Add Lecturer
                    </button>
                    <label className="text-[1vw] font-[Montserrat] font-medium text-black" for="courseDetails">Course Overview</label>
                    <ReactQuill 
                        theme="snow" 
                        value={value} 
                        onChange={setValue} 
                        placeholder="Enter a description..."
                        className="h-[20%] w-[100%] rounded-xl text-[1vw] font-medium font-[Montserrat]"
                    />
                </div>
            </div>
        </section>
    );
}

export default AdminResource;