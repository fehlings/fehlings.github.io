export const experiences = [
  {
    company: "Technical University of Munich (TUM)",
    time: "05.2026 - now",
    title: "PostDoc",
    location: "Munich, Germany",
    description:
      "Compact modeling of ferroelectric devices, extending the Heracles compact model to cover FeFET devices. Design of FeFET memory macros and neuromorphic circuits in 28 nm CMOS technology.",
  },
  {
    company: "University of Groningen",
    time: "12.2025 - 04.2026",
    title: "Researcher",
    location: "Groningen, Netherlands",
    description: "Continuation of the previous work.",
  },
  {
    company: "University of Groningen",
    time: "01.2024 - 11.2025",
    title: "PhD researcher",
    location: "Groningen, Netherlands",
    description:
      "Electrical characterization on modeling of emerging memory devices for integration with neuromorphic CMOS systems in the course of the ERC starting grant MEMRINESS. Focus on integration of HfO2-based FeRAM with CMOS circuits to realise functional blocks for neurons and synapses with biological time-scales in spiking neural networks. Tap-Out in 180 nm CMOS technology.",
  },
  {
    company: "NaMLab gGmbH",
    time: "06.2022 - 12.2023",
    title: "Scientist",
    location: "Dresden, Germany",
    description:
      "Fabrication, electrical characterization on modeling of emerging memory devices for integration with neuromorphic CMOS systems in the course of the ERC starting grant MEMRINESS.",
  },
  {
    company: "Black Semiconductor GmbH",
    time: "03.2022 - 05.2022",
    title: "Engineer",
    location: "Aachen, Germany",
    description:
      "Continuation of the previous work on the development of graphene-based electro-optical modulators and photodetectors",
  },
  {
    company: "AMO GmbH",
    time: "11.2020 - 02.2022",
    title: "Student Assistant & Intern",
    location: "Aachen, Germany",
    description:
      "Fabrication and optical/radio-frequency characterization of graphene-based electro-optical modulators and photodetectors. Process development for i-line lithography, reactive sputter deposition of optical materials. Development of a process flow to pattern, electrically contact and passivate graphene.",
  },
  {
    company: "Institut für Werkstoffe der Elektrotechnik I, RWTH Aachen",
    time: "2019.11 - 2020.09",
    title: "Student Assistant",
    location: "Aachen, Germany",
    description:
      "Fabrication and electro-chemical characterisation of on-chip reference electrodes for biosensor applications. Development of a deposition process to increase the reliability of organic semiconductor-based electrodes.",
  },
];

export const education = [
  {
    school: "University of Groningen",
    time: "06.2022 - 02.2026",
    degree: "PhD",
    location: "Groningen, Netherlands",
    description:
      "The PhD was awarded at the University of Groningen, while the research was carried out at NaMLab gGmbH, TU Dresden and the University of Groningen. Awarded 'cum laude'.",
  },
  {
    school: "RWTH Aachen Universty",
    time: "10.2019 - 02.2022",
    degree: "M.Sc.",
    location: "Aachen, Germany",
    description:
      "Course: Electrical Engineering, Communication Technology and Computer Engineering, with focus topic Micro- and Nanoelectronics. Awarded 'with distinction'.",
  },
  {
    school: "RWTH Aachen University",
    time: "10.2016 - 09.2019",
    degree: "B.Sc.",
    location: "Aachen, Germany",
    description:
      "Course: Electrical Engineering, Communication Technology and Computer Engineering, with focus topic Micro- and Nanoelectronics.",
  },
];

export const skills = [
  {
    title: "Compact Modeling",
    description: "VerilogA, SPICE, Cadence Spectre, ngspice",
  },
  {
    title: "Electrical Characterization",
    description:
      "Quasistatic, transient and RF routines, automated wafer-scale characterization, parametric test, reliability characterization, design of measurement hardware and systems, custom characterization CMOS circuits",
  },
  {
    title: "Circuit design",
    description:
      "Design of analog/mixed-signal CMOS circuits for memory macros, neuromorphic systems and integrated characterization systems",
  },
];

export const publications = [
  {
    title:
      "Millisecond-scale Relaxation in Metastable HZO Ferroelectric Capacitors for Bio-inspired Temporal Computing",
    authors: "Luca Fehlings, Thomas Mikolajick, Beatriz Noheda, and Erika Covi",
    journal: "Advanced Electronic Materials",
    time: "in production",
    link: "https://doi.org/10.1002/aelm.20250079",
    arxiv: "https://arxiv.org/pdf/2508.08973",
    abstract:
      "Depolarization effects in HfO2-based ferroelectric devices have gained significant interest for research on non-volatile memory applications. Understanding retention mechanisms enables device optimization for temporal and brain-inspired computing in hardware. This work presents a ferroelectric capacitor stack that shows a metastable P-Up state that relaxes on a millisecond scale through a unique interface configuration. Electrical characterization demonstrates the device's capability for implementing tunable time constants in hardware, followed by investigation of the electronic mechanisms underlying observed retention times to facilitate modeling of retention processes in HfO$_2$-based ferroelectric capacitors. Internal electric fields stabilize one polarization state, enabling unipolar operation with millisecond retention for the unstable polarization. The observed retention loss depends on both polarization state and programming conditions, allowing exploitation of multiple memory time-scales in a single device. The defective interface in the material stack provides insight into retention loss mechanisms and internal bias field origins in HfO2-based ferroelectric devices. These internal bias fields are related to interface composition, with oxygen vacancies identified as a possible source. The results demonstrate that HfO2-based ferroelectric devices offer an elegant solution for realizing tunable time constants in scaled memory devices, providing memory elements for brain-inspired temporal computing hardware.",
  },
  {
    title:
      "Bruno: backpropagation running undersampled for novel device optimisation",
    authors:
      "Luca Fehlings, Bojian Zhang, Paolo Gibertini, Martin A Nicholson, Erika Covi and Fernando M Quintana",
    journal: "Neuromorphic Computing and Engineering",
    time: "15 April 2026",
    link: "https://doi.org/10.1088/2634-4386/ae573b",
    arxiv: "https://arxiv.org/pdf/2505.17791",
    abstract:
      "Recent efforts to improve the efficiency of neuromorphic and machine learning systems have centred on developing of specialised hardware for neural networks. These systems typically feature architectures that go beyond the von Neumann model employed in general-purpose hardware such as GPUs, offering potential efficiency and performance gains. However, neural networks developed for specialised hardware must consider its specific characteristics. This requires novel training algorithms and accurate hardware models, since they cannot be abstracted as a general-purpose computing platform. In this work, we present a bottom-up approach to training neural networks for hardware-based spiking neurons and synapses, built using ferroelectric capacitors and resistive random-access memories (RRAMs), respectively. Unlike the common approach of designing hardware to fit abstract neuron or synapse models, we start with compact models of the physical device to model the computational primitives. Based on these models, we have developed a training algorithm backpropagation running undersampled for novel device optimisation (BRUNO) that can reliably train the networks, even when applying hardware limitations, such as stochasticity or low bit precision. We analyse and compare BRUNO with backpropagation through time. We test it on different spatio-temporal datasets. First on a music prediction dataset, where a network composed of ferroelectric leaky integrate-and-fire (FeLIF) neurons is used to predict at each time step the next musical note that should be played. The second dataset consists on the classification of the Braille letters using a network composed of quantised RRAM synapses and FeLIF neurons. The performance of this network is then compared with that of networks composed of LIF neurons. Experimental results show the potential advantages of using BRUNO by reducing the time and memory required to detect spatio-temporal patterns with quantised synapses.",
  },
  {
    title:
      "Defect-Aware Physics-Based Compact Model for Ferroelectric nvCap: From TCAD Calibration to Circuit Co-Design",
    authors:
      "Luca Fehlings, Nihal Raut, Md Hanif Ali, Francesco M Puglisi, Andrea Padovani, Veeresh Deshpande and Erika Covi",
    journal: "arXiv preprint ",
    time: "26 November 2025",
    link: "https://doi.org/10.48550/arXiv.2511.21267",
    arxiv: "https://arxiv.org/abs/2511.21267",
    abstract:
      "Ferroelectric non-volatile capacitance-based memories enable non-destructive readout and low-power in-memory computing with 3D stacking potential. However, their limited memory window (1-10 fF/µm) requires material-device-circuit co-optimization. Existing compact models fail to capture the physics of small-signal capacitance, device variability, and cycling degradation, which are critical parameters for circuit design. In non-volatile capacitance devices, the small-signal capacitance difference of the polarization states is the key metric. The majority of the reported compact models do not incorporate any physical model of the capacitance as a function of voltage and polarization. We present a physics-based compact model that captures small-signal capacitance, interface and bulk defect contributions, and device variations through multi-scale modeling combining experimental data, TCAD simulations, and circuit validation. Based on this methodology, we show optimized memory read-out with +/- 5 mV sense margin and impact of device endurance at the circuit level. This work presents a comprehensive compact model which enables the design of selector-less arrays and 3D-stacked memories for compute-in-memory and storage memory. ",
  },
  {
    title:
      "Heracles: A HfO2 Ferroelectric Capacitor Compact Model for Efficient Circuit Simulations",
    authors:
      "Luca Fehlings, Md Hanif Ali, Paolo Gibertini, Egidio A. Gallicchio, Udayan Ganguly, Veeresh Deshpande and Erika Covi",
    journal: "IEEE Transactions on Electron Devices",
    time: "09 October 2025",
    link: "https://doi.org/10.1109/TED.2025.3615577",
    arxiv: "https://arxiv.org/pdf/2410.07791",
    abstract:
      "This paper presents a physics-based compact model for circuit simulations in a SPICE environment for HfO2-based ferroelectric capacitors (FeCaps). The model has been calibrated based on experimental data obtained from HfO2-based FeCaps. A thermal model with an accurate description of the device parasitics is included to derive precise device characteristics based on first principles. The model incorporates statistical data that enables Monte Carlo analysis based on realistic distributions, thereby making it particularly well-suited for design-technology co-optimization (DTCO). Furthermore, the model is demonstrated in circuit simulations using an integrated circuit with current programming, wherein partial switching of the ferroelectric polarization is observed. Finally, the model was benchmarked in an array simulation, reaching convergence in 1.8 s with an array size of 100 kb. ",
  },
  {
    title:
      "Reliability of Capacitive Read in Arrays of Ferroelectric Capacitors",
    authors:
      "Luca Fehlings, Muhtasim Alam Chowdhury, Banafsheh Saber Latibari, Soheil Salehi and Erika Covi",
    journal:
      "2025 IEEE International Symposium on Circuits and Systems (ISCAS)",
    time: "25-28 May 2025",
    link: "https://doi.org/10.1109/ISCAS56072.2025.11044070",
    arxiv: "https://arxiv.org/pdf/2506.09480",
    abstract:
      "The non-destructive capacitance read-out of ferroelectric capacitors (FeCaps) based on doped HfO2 metal-ferroelectric-metal (MFM) structures offers the potential for low-power and highly scalable crossbar arrays. This is due to a number of factors, including the selector-less design, the absence of sneak paths, the power-efficient charge-based read operation, and the reduced IR drop. Nevertheless, a reliable capacitive readout presents certain challenges, particularly in regard to device variability and the trade-off between read yield and read disturbances, which can ultimately result in bit-flips. This paper presents a digital read macro for HfO2 FeCaps and provides reliability analysis for the capacitive readout of HfO2 FeCaps, taking device variability and yield challenges into account. An experimentally calibrated physics-based compact model of HfO2 FeCaps is employed to investigate the reliability of the read-out operation of the FeCap macro through Monte Carlo simulations. Based on this analysis, we identify limitations posed by the device variability and propose potential mitigation strategies through design-technology co-optimization (DTCO) of the FeCap device characteristics and the CMOS circuit design. Finally, we examine the potential applications of the FeCap macro in the context of secure hardware. We identify potential security threats and propose strategies to enhance the robustness of the system.",
  },
  {
    title:
      "Coincidence Detection with an Analog Spiking Neuron Exploiting Ferroelectric Polarization",
    authors:
      "Paolo Gibertini, Luca Fehlings, Thomas Mikolajick, Elisabetta Chicca, David Kappel and Erika Covi",
    journal:
      "2024 IEEE International Symposium on Circuits and Systems (ISCAS)",
    time: "19-22 May 2024",
    link: "https://doi.org/10.1109/ISCAS58744.2024.10558196",
    arxiv:
      "https://pure.rug.nl/ws/portalfiles/portal/1065684534/Coincidence_Detection_with_an_Analog_Spiking_Neuron_Exploiting_Ferroelectric_Polarization.pdf",
    abstract:
      "The ability to detect correlated events in the environment is an important feat of biological neural networks. Neuromorphic computing strives to mimic this ability for efficientsensory processing. For this purpose, we propose a HfO2-based ferroelectric capacitor (FeCap)-complementary metal oxide semiconductor (CMOS) leaky integrate-and-fire (LIF) neuron able to detect highly correlated events exploiting two different temporal dynamics. The possibility to exploit two time constants increases the versatility of the neuron and its dynamic adaptation while offering a compact and elegant solution for detection of both transient and sustained coincidences. Moreover, the time constants are in biologically relevant time scales, which makes the neuron suitable to solve real-time tasks such as keyword spotting or sensory processing. The proposed FeCap-based LIF (FeLIF) neuron enriches the dynamic of a standard LIF neuron fostering the development of advanced event-based analog neuromorphic hardware.",
  },
  {
    title: "A Ferroelectric Tunnel Junction-based Integrate-and-Fire Neuron",
    authors:
      "Paolo Gibertini, Luca Fehlings, Suzanne Lancaster, Quang T. Duong, Thomas Mikolajick, Catherine Dubourdieu, Stefan Slesazeck, Erika Covi and Veeresh Deshpande",
    journal:
      "2022 29th IEEE International Conference on Electronics, Circuits and Systems (ICECS)",
    time: "24-26 October 2022",
    link: "https://doi.org/10.1109/ICECS202256217.2022.9970799",
    arxiv: "https://arxiv.org/pdf/2211.02598",
    abstract:
      "Event-based neuromorphic systems provide a low-power solution by using artificial neurons and synapses to process data asynchronously in the form of spikes. Ferroelectric Tunnel Junctions (FTJs) are ultra low-power memory devices and are well-suited to be integrated in these systems. Here, we present a hybrid FTJ-CMOS Integrate-and-Fire neuron which constitutes a fundamental building block for new-generation neuromorphic networks for edge computing. We demonstrate electrically tunable neural dynamics achievable by tuning the switching of the FTJ device.",
  },
];

// AND AWARDS
// AND CONFERENCES WITHOUT PROCEEDINGS
