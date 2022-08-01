// import { useState, useEffect } from "react";
// import "./App.css";
// import html2canvas from "html2canvas";

// function NodemailerApp() {
//   const [mailerState, setMailerState] = useState({
//     name: "",
//     email: "",
//     message: "",
//     attachments: [
//       {
//         // data uri as an attachment
//         path: {},
//       },
//     ],
//   });

//   useEffect(() => {
//     async function printDocument() {
//       const input = document.getElementById("divToPrint");
//       let canvas = await html2canvas(input, {
//         width: 4000,
//         height: 8000,
//         scale: 0.57,
//         x: -35,
//       });

//       const imgData = await canvas.toDataURL("image/png");
//       setMailerState({
//         name: "",
//         email: "",
//         message: "",
//         attachments: [
//           {
//             // data uri as an attachment
//             path: { imgData },
//           },
//         ],
//       });
//     }
//     printDocument();
//   }, []);

//   const submitEmail = async (e) => {
//     e.preventDefault();
//     console.log({ mailerState });
//     const response = await fetch("http://localhost:3001/send", {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-type": "application/json",
//         "access-control-allow-origin": "*",
//       },
//       body: JSON.stringify({ mailerState }),
//     })
//       .then((res) => res.json())
//       .then(async (res) => {
//         const resData = await res;
//         console.log(resData);
//         if (resData.status === "success") {
//           alert("Message Sent");
//         } else if (resData.status === "fail") {
//           alert("Message failed to send");
//         }
//       })
//       .then(() => {
//         setMailerState({
//           email: "",
//           name: "",
//           message: "",
//         });
//       });
//   };

//   function handleStateChange(e) {
//     setMailerState((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   }

//   return (
//     <div className="App">
//       <form
//         style={{
//           display: "flex",
//           height: "100vh",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         onSubmit={submitEmail}
//       >
//         <fieldset
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             width: "50%",
//           }}
//         >
//           <legend>React NodeMailer Contact Form</legend>
//           <input
//             placeholder="Name"
//             onChange={handleStateChange}
//             name="name"
//             value={mailerState.name}
//           />
//           <input
//             placeholder="Email"
//             onChange={handleStateChange}
//             name="email"
//             value={mailerState.email}
//           />
//           <textarea
//             style={{ minHeight: "200px" }}
//             placeholder="Message"
//             onChange={handleStateChange}
//             name="message"
//             value={mailerState.message}
//           />
//           <button>Send Message</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default NodemailerApp;
