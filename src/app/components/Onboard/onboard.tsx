"use client";
import dynamic from 'next/dynamic';

// Dynamically import chart components with no SSR
const Bar = dynamic(() => import('react-chartjs-2').then(mod => mod.Bar), { ssr: false });
const Line = dynamic(() => import('react-chartjs-2').then(mod => mod.Line), { ssr: false });
const Doughnut = dynamic(() => import('react-chartjs-2').then(mod => mod.Doughnut), { ssr: false });

import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // Data for Visitors Analytics Pie Chart
  const visitorsData = {
    labels: ["Desktop", "Mobile", "Tablet", "Unknown"],
    datasets: [
      {
        label: "Visitors",
        data: [65, 20.93, 34, 12],
        backgroundColor: ["#66BB6A", "#A5D6A7", "#388E3C", "#388E3C"],
        hoverOffset: 15, // Animation on hover
      },
    ],
  };

  // Data for "Total Revenue vs Total Sales" Line Chart
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Performence Graph",
        data: [60, 65, 70, 75, 80, 85, 90, 95, 100],
        borderColor: "#66BB6A",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        fill: true,
        tension: 0.3, // Smooth curve
      },
      {
        label: "Total Sales",
        data: [150, 200, 250, 350, 400, 450, 500, 550, 600, 650],
        borderColor: "#66BB6A",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // Data for Pie Chart in "Profit This Week"
  const profitData = {
    labels: ["Sales", "Revenue"],
    datasets: [
      {
        label: "Profit Distribution",
        data: [60, 40],
        backgroundColor: ["#A5D6A7", "#388E3C"],
        hoverOffset: 20, // Animation on hover
      },
    ],
  };

  // Data for Recent Exams Bar Chart
  const recentExamData = {
    labels: [
      "Exam 1",
      "Exam 2",
      "Exam 3",
      "Exam 4",
      "Exam 5",
      "Exam 6",
      "Exam 7",
      "Exam 8",
      "Exam 9",
      "Exam 10",
    ],
    datasets: [
      {
        label: "Score",
        data: [75, 85, 90, 78, 88, 92, 76, 84, 91, 87],
        backgroundColor: "#A5D6A7",
        hoverBackgroundColor: "#66BB6A",
        borderColor: "#388E3C",
        borderWidth: 1,
      },
    ],
  };

  // Latest Exam Details
  const examDetails = {
    exam_title: "Physics Midterm",
    total_marks: 100,
    obtained_marks: 85,
    grade: "A",
    percentage: 85,
    feedback: "Excellent performance! Keep up the good work.",
    exam_date: "2024-01-15",
    time_taken: "1 hour 45 minutes",
    question_breakdown: {
      correct: 17,
      incorrect: 3,
      skipped: 0
    },
    strengths: ["Problem Solving", "Analytical Thinking", "Physics Concepts"],
    areas_for_improvement: ["Complex Problems", "Time Management"]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Welcome Card */}
      <div className="bg-green-600 text-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
        <p className="mt-2">Here is an overview of your performance and metrics.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
        <Card title="Total Exam" value="3.456K" percentage="0.43%" />
        <Card title="Total Pass" value="45.2K" percentage="4.35%" />
        <Card title="Total Fail" value="2,450" percentage="2.59%" />
        <Card title="Total Percentage" value="3,456" percentage="0.95%" />
        <Card title="Active Point Earned" value="1,234" percentage="1.2%" />
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Total Revenue vs Total Sales */}
        <div className="bg-white p-6 rounded-lg shadow-md xl:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Performance Graph</h3>
          <div className="h-full w-full">
            <Line data={revenueData} />
          </div>
        </div>

        {/* Latest Exam Result */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Latest Exam Result</h3>
          <div className="flex flex-col xl:flex-row items-center">
            {/* Pie Chart */}
            <div className="h-56 w-56 mb-4 xl:mb-0 xl:mr-6">
              <Doughnut data={profitData} />
            </div>

            {/* Exam Details */}
            <div className="flex-1">
              <ul className="space-y-2 text-gray-800">
                <li><strong>Exam Title:</strong> {examDetails.exam_title}</li>
                <li><strong>Date:</strong> {examDetails.exam_date}</li>
                <li><strong>Time Taken:</strong> {examDetails.time_taken}</li>
                <li><strong>Total Marks:</strong> {examDetails.total_marks}</li>
                <li><strong>Obtained Marks:</strong> {examDetails.obtained_marks}</li>
                <li><strong>Grade:</strong> {examDetails.grade}</li>
                <li><strong>Percentage:</strong> {examDetails.percentage}%</li>
                <li className="mt-2">
                  <strong>Question Breakdown:</strong>
                  <ul className="ml-4">
                    <li className="text-green-600">Correct: {examDetails.question_breakdown.correct}</li>
                    <li className="text-red-600">Incorrect: {examDetails.question_breakdown.incorrect}</li>
                    <li className="text-gray-600">Skipped: {examDetails.question_breakdown.skipped}</li>
                  </ul>
                </li>
                <li className="mt-2">
                  <strong>Strengths:</strong>
                  <ul className="ml-4 list-disc text-green-600">
                    {examDetails.strengths.map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                </li>
                <li className="mt-2">
                  <strong>Areas for Improvement:</strong>
                  <ul className="ml-4 list-disc text-orange-600">
                    {examDetails.areas_for_improvement.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </li>
                <li className="mt-2"><strong>Feedback:</strong> {examDetails.feedback}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Analytics & Region Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        {/* Visitor Analytics */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="h-full w-full">
            <Doughnut data={visitorsData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Recent Exam Results */}
        <div className="bg-backgroundWhite p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recent Exam Results</h3>
          <div className="h-64">
            <Bar
              data={recentExamData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                animation: {
                  duration: 1000,
                  easing: "easeOutBounce",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Card Component
interface CardProps {
  title: string;
  value: string;
  percentage: string;
}

function Card({ title, value, percentage }: CardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-sm font-medium text-gray-600">{title}</h4>
      <div className="text-xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-green-500">{percentage}</div>
    </div>
  );
}
