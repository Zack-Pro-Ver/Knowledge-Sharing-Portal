// import Button from "../../elements/Button/index";

// interface Props {
//   title: string;
// }

// export const OverviewRecQuestionsHeader = ({ title }: Props) => {
//   return (
//     <>
//       <p className="text-2xl font-bold ">{title}</p>

//       <Button variant="text">ViewAll</Button>
//     </>
//   );
// };

import Card, { CardContent } from "../../elements/Card"
import { RecQuesStats } from "../Overview/Overview.constants"
export const OverviewRecQues=()=>{
return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 ">
{RecQuesStats.map(({ },index)=>(


<Card key={index}>
<CardContent>

   <div
                className="bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                

                <div className="flex-col-3 gap-3">
                    <div className="flow-root p-6">
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <div className=" shrink-0">
                                    <i className="fi fi-rr-question text-xl text-green-500 dark:text-gray-300"></i>

                                </div>
                                <div className="flex gap-4">
                                    <p className="text-sm font-medium  text-gray-900 truncate dark:text-white">
                                        SarahChen
                                    </p>
                                    <p className="text-sm font-normal text-gray-900 truncate dark:text-white">
                                        2 hours ago </p>
                                </div>
                            </div>
                            <div className="flex">
                                <p type="button"
                                    className="flex flex-col items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-small  rounded-lg text-xs p-1 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <span className="text-xs text-white">Answer</span>
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-base font-medium">How to implement authentication in Next.js?
                            </p>
                        </div>


                        <div className="flex gap-5 pt-3">
                            <p className="text-xs bg-green-100 w-auto p-1 text-center rounded-lg text-gray-800 me-2">
                                Answered
                            </p>
                            <p className="text-sm font-normal">3 answers</p>
                            <p className="text-sm font-normal">12 votes </p>
                        </div>

                    </div>
                 


                </div>
            </div>
</CardContent>

</Card>
)}


    



