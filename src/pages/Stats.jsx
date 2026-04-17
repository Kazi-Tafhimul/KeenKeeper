import React from 'react';
import { useTimeline } from '../context/useTimeline';
import { Pie, PieChart } from 'recharts';

const Stats = () => {
    const {timeLine} = useTimeline();
      if (timeLine.length === 0) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <h1 className='text-3xl font-bold'>
                    No interactions to show yet
                </h1>
            </div>
        );
    }
    const callCount = timeLine.filter(entry => entry.action === "Call").length;
    const textCount = timeLine.filter(entry => entry.action === "Text").length;
    const videoCount = timeLine.filter(entry => entry.action === "Video").length;
    const chartData = [
        { name: "Call", value: callCount, fill: "#0088FE" },
        { name: "Text", value: textCount, fill: "#00C49F" },
        { name: "Video", value: videoCount, fill: "#FFBB28" }
    ];
    return (
        <div className='flex flex-col items-center p-8'>
            <h1 className='text-3xl font-bold mb-8'>
                Friendship Analytics
            </h1>
            <div className='shadow-sm p-8 rounded-lg w-full max-w-2xl'>
                <h1 className='text-lg font-semibold mb-6'>
                    By Interaction Type
                </h1>
                <div className='flex justify-center'>
                    <PieChart
                    style={  { 
                            width: '100%', 
                            maxWidth: '500px', 
                            maxHeight: '80vh', 
                            aspectRatio: 1 
                        } 
                        }
                        responsive>
                             <Pie
                            data={chartData}
                            innerRadius="80%"
                            outerRadius="100%"
                            cornerRadius="50%"
                            paddingAngle={5}
                            dataKey="value"
                        />
                        </PieChart>
                </div>
                <div className='flex justify-center gap-6 mt-6'>
                    <div className='flex items-center gap-2'>
                        <span className='w-3 h-3 rounded-full bg-[#0088FE]'>

                        </span>
                        <p>Call</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='w-3 h-3 rounded-full bg-[#00C49F]'>

                        </span>
                        <p>Text</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='w-3 h-3 rounded-full bg-[#FFBB28]'>

                        </span>
                        <p>Video</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Stats;