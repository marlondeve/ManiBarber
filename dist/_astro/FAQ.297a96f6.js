import{r as n}from"./index.f1bc5ebf.js";import{j as e}from"./jsx-runtime.109e40f8.js";import{m as i}from"./motion.e3ea24f3.js";const l=[{question:"Can I upgrade or downgrade my plan at any time?",answer:"Yes, you can easily upgrade or downgrade your plan at any time. Simply navigate to the account settings in your dashboard and choose the desired plan. The changes will be reflected immediately, and any adjustments in pricing will be applied on your next billing cycle. Our support team is more than happy to provide guidance and recommendations."},{question:"How to claim your 25% discount offer?",answer:"To claim your 25% discount, simply sign up for an account and enter the promotional code at checkout. The discount will be applied automatically to your purchase."},{question:"What's your refund policy?",answer:"We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund."},{question:"How to get support for the product?",answer:"Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have"}],m=()=>e.jsxs("section",{className:"relative pt-16 pb-16 bg-blueGray-50 overflow-hidden",children:[e.jsx("div",{className:"absolute -top-10",id:"FAQ"}),e.jsx(i.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.2},children:e.jsx("div",{className:"relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full",children:e.jsxs("div",{className:"md:max-w-4xl mx-auto",children:[e.jsx("p",{className:"mb-7 custom-block-subtitle text-center",children:"Have any questions?"}),e.jsx("h2",{className:"mb-16 custom-block-big-title text-center",children:"Frequently Asked Questions"}),e.jsx("div",{className:"mb-11 flex flex-wrap -m-1",children:l.map((t,o)=>e.jsx("div",{className:"w-full p-1",children:e.jsx(c,{title:t.question,content:t.answer,defaultOpen:o===0},`${t.question}-${t.answer}`)}))})]})})})]}),c=({defaultOpen:t,title:o,content:s})=>{const[a,r]=n.useState(t);return e.jsxs("div",{className:"pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer",onClick:()=>r(!a),children:[e.jsxs("div",{className:"flex flex-col p-2  justify-center items-start",children:[e.jsx("h3",{className:" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0",children:o}),e.jsx("p",{className:`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${a?"max-h-96":"max-h-0"}`,children:s})]}),e.jsx("div",{className:"absolute top-6 right-4 sm:top-8 sm:right-8",children:e.jsx("svg",{width:"28px",height:"30px",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`transition-all duration-500  ${a?"rotate-[180deg]":"rotate-[270deg]"}`,children:e.jsx("path",{d:"M4.16732 12.5L10.0007 6.66667L15.834 12.5",stroke:"#4F46E5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})};export{m as FAQ};