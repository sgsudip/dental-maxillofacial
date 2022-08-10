import React, { useEffect} from "react";
import "./ReactCardSlider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ReactCardSlider = (props) => {
  const slides = [
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
    {
      con: "1",
      src: "images/doc.jpg",
      title: "Dr Hemant Gupta",
      desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
    },
    {
        con: "1",
        src: "images/doc.jpg",
        title: "Dr Hemant Gupta",
        desc: "Dr Hemant is a specialist in oral and Maxillofacial surgery. He is an alumni of King George's medical college, lucknow. He is an expert in the implants and surgeries of the face and jaw. Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.",
      },
    {
      con: "2",
      "src":"images/docdp.jpg",
      title: "Dr Swati Gupta",
      desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
  professor and senior consultant at the B.B.D college of dental science.`,
    },
    {
        con: "2",
        "src":"images/docdp.jpg",
        title: "Dr Swati Gupta",
        desc: `Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow. She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a
    professor and senior consultant at the B.B.D college of dental science.`,
      },
  ];

//   const slider = document.getElementById("slider");

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    // for (var i = 0; i < 10000; i++) {
    //     window.clearInterval(i);
    //   }
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    // for (var i = 0; i < 10000; i++) {
    //   window.clearInterval(i);
    // }
    slider.scrollLeft = slider.scrollLeft + 500;
  };

 
//   const [slide, setSlide] = useState(null);

  useEffect(() => {
    window.slider = document.getElementById("slider");
    
    window.setInterval(slideRight, 5000);
  }, []);

  return (
    <div id="main-slider-container">
      <MdKeyboardArrowLeft
        className="slider-icon left"
        size={40}
        onClick={slideLeft}
      />
      <div id="slider">
        {slides.map((slide, index) => (
          <div className="slider-card" key={index}>
            <div className="slider-card-image-container">
              <img src={slide.src} className="slider-card-image" alt="hell" />
            </div>
            <p className="slider-card-title">{slide.title}</p>
            <p className="slider-card-description">{slide.desc}</p>
          </div>
        ))}
      </div>
      <MdKeyboardArrowRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};

export default ReactCardSlider;
