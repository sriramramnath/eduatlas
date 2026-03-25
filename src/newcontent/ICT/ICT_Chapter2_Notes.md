# IGCSE ICT — Chapter 2: Software
## Detailed Notes (Pearson Edexcel Specification)

---

## 1. Introduction to Software

Software refers to the programs, applications, and data that instruct digital devices how to perform specific tasks. Unlike hardware, which represents the physical components of a computer system, software is intangible—it exists as coded instructions stored on storage media and loaded into memory during execution. The relationship between hardware and software is fundamental: hardware provides the physical capability to process data, while software provides the instructions that direct this processing.

Software can be broadly categorised into two main types: system software and application software. System software manages and controls computer hardware, providing a platform for running application software. Application software, by contrast, performs specific tasks for users, such as word processing, web browsing, or photo editing. Understanding this distinction is crucial for the IGCSE ICT examination, as questions frequently require students to classify software types and explain their purposes.

---

## 2. System Software

System software is designed to operate, control, and maintain the computer hardware and provide a platform for application software to run. Without system software, application software cannot function, as system software creates the necessary environment for applications to execute.

### 2.1 Operating Systems

The operating system (OS) is the most fundamental piece of system software. It acts as an intermediary between users and computer hardware, managing all resources and providing a user interface.

#### Functions of an Operating System

**Processor Management:**
The OS manages the CPU, allocating processing time to different programs through process scheduling. Modern operating systems use preemptive multitasking, where the OS decides which process receives CPU time and for how long. This ensures fair resource allocation and prevents any single program from monopolising the processor. The OS handles process creation, scheduling, suspension, and termination, maintaining process control blocks that track the state and resources of each running program.

**Memory Management:**
Operating systems manage RAM allocation, assigning memory space to programs when they load and reclaiming it when they close. The OS uses techniques such as paging and virtual memory to extend available memory by using hard drive space as temporary storage. Memory protection prevents programs from accessing memory allocated to other programs, enhancing system stability and security.

**Storage Management:**
The OS manages file systems, organising data into files and directories (folders) on storage devices. It handles file creation, deletion, reading, writing, and organisation through hierarchical directory structures. The OS manages file allocation tables, tracks free space, and handles disk scheduling to optimise read/write operations.

**Input/Output Management:**
Device drivers are specialised programs that allow the OS to communicate with hardware devices. The OS manages all input/output operations, providing a standard interface for applications to interact with devices regardless of their specific hardware implementations. This abstraction means applications do not need to understand the details of every possible hardware device.

**User Interface:**
Operating systems provide interfaces through which users interact with the computer. These may be:
- **Command Line Interface (CLI):** Text-based interface where users type commands
- **Graphical User Interface (GUI):** Visual interface using windows, icons, menus, and pointers (WIMP)
- **Touch Interface:** Gesture-based interaction optimised for touchscreen devices

**Security and Access Control:**
The OS implements security measures including user authentication (passwords, biometrics), file permissions, and access controls. It manages user accounts, groups, and privileges, ensuring users can only access resources they are authorised to use.

**Error Handling:**
Operating systems detect and handle errors, providing error messages, logging system events, and implementing recovery procedures when problems occur.

#### Common Operating Systems

**Microsoft Windows:**
- Dominant OS for desktop and laptop computers
- Graphical user interface with familiar Windows design
- Wide software compatibility
- Regular updates and security patches
- Versions include Windows 10 and Windows 11

**macOS:**
- Apple's operating system for Mac computers
- Known for intuitive interface and design
- Integration with Apple ecosystem (iPhone, iPad)
- Built on Unix foundation
- Strong security features

**Linux:**
- Open-source operating system (free to use and modify)
- Many distributions available (Ubuntu, Fedora, Debian)
- Highly customisable and secure
- Popular for servers and technical users
- Community-supported development

**Android:**
- Google's operating system for smartphones and tablets
- Open-source based on Linux kernel
- Largest market share in mobile devices
- Customisable by manufacturers
- Google Play Store for applications

**iOS/iPadOS:**
- Apple's operating system for iPhone and iPad
- Closed ecosystem with strict app quality control
- Known for security and smooth performance
- App Store for applications
- Integration with Apple services

### 2.2 Utility Software

Utility software performs specific maintenance and management tasks to keep computer systems running efficiently. While application software helps users perform tasks, utility software helps maintain the computer itself.

#### Antivirus Software

Antivirus software protects computers from malware (malicious software) including viruses, worms, trojans, spyware, and ransomware.

**How Antivirus Works:**
- **Signature-based detection:** Compares files against a database of known malware signatures
- **Heuristic analysis:** Examines program behaviour to detect unknown threats
- **Real-time protection:** Scans files as they are accessed or downloaded
- **Quarantine:** Isolates infected files to prevent spread
- **Regular updates:** Downloads new virus definitions to detect emerging threats

**Common Antivirus Software:** Norton, McAfee, Avast, Windows Defender, Malwarebytes

#### Disk Cleanup and Defragmentation

**Disk Cleanup:**
Disk cleanup utilities remove unnecessary files to free storage space. They typically target:
- Temporary files created by applications
- Browser cache and cookies
- Downloaded program files
- Recycle bin contents
- System log files
- Windows update cleanup

**Disk Defragmentation:**
Hard disk drives store files in clusters across the disk surface. Over time, files become fragmented—split into pieces stored in non-adjacent clusters. This slows access as the read/write head must move between different locations.

Defragmentation utilities reorganise files so clusters are contiguous, improving read performance. SSDs do not require defragmentation and can be harmed by it; they use TRIM commands instead for maintenance.

#### Backup Software

Backup software creates copies of data to enable recovery after data loss. Different backup strategies exist:

| Backup Type | What's Copied | Speed | Storage Space |
|-------------|---------------|-------|---------------|
| Full Backup | All selected files | Slowest | Largest |
| Incremental | Files changed since last backup | Fast | Small |
| Differential | Files changed since last full backup | Medium | Medium |

Backup software may also offer:
- Scheduled automatic backups
- Compression to reduce storage requirements
- Encryption for security
- Cloud backup integration

#### Compression Software

Compression software reduces file sizes to save storage space and reduce transfer times.

**Lossless Compression:**
- No data is lost during compression
- Original file can be perfectly reconstructed
- Used for documents, spreadsheets, program files
- Examples: ZIP, RAR, 7-Zip

**Lossy Compression:**
- Some data is permanently removed
- Used for media files where perfect accuracy isn't essential
- Achieves higher compression ratios
- Used for images (JPEG), audio (MP3), video (MP4)

#### File Management Utilities

File managers provide interfaces for organising files and folders:
- Copy, move, rename, delete files
- Create and organise folder structures
- Search for files
- View file properties and metadata
- Examples: Windows File Explorer, macOS Finder

### 2.3 Device Drivers

Device drivers are specialised programs that enable the operating system to communicate with hardware devices. Each hardware device requires a specific driver that translates OS commands into instructions the device understands.

**Types of Drivers:**
- **Built-in drivers:** Included with the OS for common devices
- **Manufacturer drivers:** Provided by hardware manufacturers for specific devices
- **Generic drivers:** Basic functionality drivers when specific drivers unavailable

**Driver Functions:**
- Initialise hardware devices
- Translate OS commands to device-specific instructions
- Handle device interrupts and events
- Report device status to the OS
- Enable device configuration

**Driver Management:**
Modern operating systems include driver management that automatically detects new hardware and installs appropriate drivers. Driver updates improve performance, fix bugs, and patch security vulnerabilities.

### 2.4 Language Translators

Programming languages must be translated into machine code before computers can execute them. Different translation methods exist:

#### Compilers

Compilers translate entire source code into machine code before execution. The resulting executable file can be run independently without the compiler.

**Characteristics:**
- Produces standalone executable files
- Compilation occurs once; execution is fast
- Errors reported after compilation completes
- Source code remains private
- Examples: C++, Go, Rust compilers

#### Interpreters

Interpreters translate and execute source code line by line during runtime.

**Characteristics:**
- No separate executable file produced
- Slower execution as translation happens during runtime
- Errors reported immediately when encountered
- Useful for development and debugging
- Examples: Python interpreter, JavaScript engine

#### Assemblers

Assemblers translate assembly language (low-level symbolic code) into machine code. Assembly language has a direct correspondence with machine code instructions.

---

## 3. Application Software

Application software performs specific tasks for users. Unlike system software that manages the computer, application software helps users accomplish particular goals such as creating documents, editing photos, or communicating with others.

### 3.1 General-Purpose Application Software

General-purpose applications are designed for common tasks used across many different contexts and industries.

#### Word Processing Software

Word processors create, edit, format, and print text documents.

**Key Features:**
- Text formatting (fonts, sizes, colours, styles)
- Paragraph formatting (alignment, spacing, indentation)
- Page layout (margins, orientation, columns)
- Tables and charts
- Spell check and grammar checking
- Find and replace
- Headers and footers
- Mail merge for personalised documents
- Track changes and comments for collaboration

**Examples:** Microsoft Word, Google Docs, Apple Pages, LibreOffice Writer

**Common Uses:** Reports, letters, essays, resumes, newsletters, brochures

#### Spreadsheet Software

Spreadsheets organise, calculate, and analyse numerical data in rows and columns.

**Key Features:**
- Cells organised in rows and columns
- Formulas for calculations
- Functions for complex calculations (SUM, AVERAGE, IF, VLOOKUP)
- Charts and graphs for data visualisation
- Conditional formatting
- Sorting and filtering data
- Multiple worksheets in one workbook
- Pivot tables for data analysis
- What-if analysis with scenarios

**Examples:** Microsoft Excel, Google Sheets, Apple Numbers, LibreOffice Calc

**Common Uses:** Budgets, financial analysis, data tracking, scientific calculations, grade books

#### Database Software

Database software stores, organises, and manages structured data for efficient retrieval and manipulation.

**Key Features:**
- Structured storage using tables, records, and fields
- Queries to retrieve specific data
- Forms for data entry
- Reports for presenting data
- Relationships between tables
- Data validation and integrity rules
- Multi-user access with record locking

**Examples:** Microsoft Access, MySQL, PostgreSQL, FileMaker

**Common Uses:** Customer databases, inventory systems, library catalogues, student records

#### Presentation Software

Presentation software creates slideshows for communicating ideas to audiences.

**Key Features:**
- Slide creation with text, images, and multimedia
- Templates and themes for consistent design
- Transitions between slides
- Animation effects
- Speaker notes
- Slide sorter for organisation
- Presenter view with timer and notes
- Export to video or PDF

**Examples:** Microsoft PowerPoint, Google Slides, Apple Keynote, Prezi

**Common Uses:** Business presentations, educational lectures, training materials, sales pitches

#### Desktop Publishing (DTP) Software

DTP software combines text and graphics to create professional-quality printed publications.

**Key Features:**
- Precise page layout control
- Integration of text and images
- Typography controls
- Master pages for consistent design
- Colour management for print
- Templates for common document types
- Professional printing output options

**Examples:** Adobe InDesign, Microsoft Publisher, QuarkXPress, Scribus

**Common Uses:** Magazines, newspapers, brochures, flyers, newsletters, books

### 3.2 Special-Purpose Application Software

Special-purpose applications are designed for specific tasks or industries, offering features tailored to particular user needs.

#### Graphics and Photo Editing Software

**Raster Graphics Editors:**
- Edit pixel-based images
- Photo retouching and manipulation
- Examples: Adobe Photoshop, GIMP, Affinity Photo

**Vector Graphics Editors:**
- Create scalable graphics using mathematical shapes
- Logo design and illustrations
- Examples: Adobe Illustrator, Inkscape, CorelDRAW

#### Video Editing Software

Video editors combine video clips, audio, and effects into finished productions.

**Features:**
- Timeline-based editing
- Video transitions and effects
- Audio editing and mixing
- Text and titles
- Colour correction
- Export to various formats

**Examples:** Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, iMovie

#### Audio Editing Software

Audio editors record, edit, and manipulate sound files.

**Features:**
- Multi-track recording
- Audio effects and filters
- Noise reduction
- Mixing and mastering
- Podcast production

**Examples:** Audacity, Adobe Audition, GarageBand, Logic Pro

#### Computer-Aided Design (CAD) Software

CAD software creates precise technical drawings and 3D models.

**Applications:**
- Architectural design
- Engineering drawings
- Product design
- Manufacturing specifications

**Examples:** AutoCAD, SolidWorks, SketchUp, Fusion 360

#### Accounting Software

Accounting software manages financial transactions and reporting.

**Features:**
- Transaction recording
- Invoicing and billing
- Payroll management
- Financial reporting
- Tax preparation
- Bank reconciliation

**Examples:** QuickBooks, Xero, Sage, FreshBooks

### 3.3 Web Browsers

Web browsers access and display content on the World Wide Web.

**Key Features:**
- Address bar for URL entry
- Navigation buttons (back, forward, refresh)
- Tabbed browsing
- Bookmarks/favourites
- History tracking
- Download manager
- Extensions and add-ons
- Privacy features (private browsing, cookie management)

**Examples:** Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera

**How Browsers Work:**
1. User enters URL or clicks link
2. Browser requests page from web server
3. Server sends HTML, CSS, JavaScript files
4. Browser renders content for display
5. Additional resources (images, scripts) loaded as needed

### 3.4 Email Clients

Email client software manages email communication.

**Features:**
- Send, receive, and organise emails
- Folders and labels for organisation
- Address book/contacts
- Attachments
- Spam filtering
- Calendar integration
- Search functionality

**Examples:** Microsoft Outlook, Mozilla Thunderbird, Apple Mail

**Web-based Email:**
Many users access email through web browsers using services like Gmail, Outlook.com, and Yahoo Mail.

### 3.5 Communication Software

Communication software enables real-time interaction between users.

**Types:**
- **Instant Messaging:** Text-based real-time chat
- **Video Conferencing:** Audio and video communication
- **VoIP (Voice over IP):** Internet-based telephone calls
- **Collaboration Tools:** Shared workspaces for teams

**Examples:** Microsoft Teams, Zoom, Slack, Discord, Skype, WhatsApp

### 3.6 Open Source vs Proprietary Software

#### Proprietary Software

Proprietary (commercial) software is owned by individuals or companies who control its distribution and modification.

**Characteristics:**
- Users purchase licences to use the software
- Source code is not publicly available
- Restrictions on copying and redistribution
- Support typically provided by the vendor
- Regular updates from the developer

**Examples:** Microsoft Office, Adobe Creative Suite, Windows

**Advantages:**
- Professional support available
- Regular updates and improvements
- Polished user experience
- Clear liability and accountability

**Disadvantages:**
- Cost (licensing fees, subscriptions)
- Cannot modify to suit specific needs
- Dependent on vendor for updates and support
- May include unwanted features or restrictions

#### Open Source Software

Open source software makes source code publicly available for anyone to view, modify, and distribute.

**Characteristics:**
- Usually free to use
- Source code publicly accessible
- Community-driven development
- Users can modify and redistribute
- Often has commercial support options

**Examples:** LibreOffice, Firefox, Linux, GIMP, VLC Media Player

**Advantages:**
- No licensing costs
- Can customise for specific needs
- Transparent security (code can be audited)
- Community support and documentation
- Avoids vendor lock-in

**Disadvantages:**
- Support may be limited to community forums
- Quality varies between projects
- Documentation may be incomplete
- No guaranteed updates or maintenance
- May lack polish of commercial alternatives

### 3.7 Off-the-Shelf vs Custom Software

#### Off-the-Shelf Software

Off-the-shelf software is pre-made software designed for general use, available for immediate purchase and installation.

**Advantages:**
- Immediately available
- Lower initial cost
- Well-tested with known reliability
- Support and documentation available
- Regular updates provided

**Disadvantages:**
- May not perfectly fit specific needs
- May include unnecessary features
- Dependent on vendor for modifications
- Same software available to competitors

#### Custom Software

Custom software is developed specifically for an organisation's unique requirements.

**Advantages:**
- Tailored exactly to business needs
- Competitive advantage from unique features
- Can integrate with existing systems
- Organisation controls development direction
- Can be modified as needs change

**Disadvantages:**
- High development costs
- Long development time
- Risk of project failure
- Ongoing maintenance responsibility
- Limited external support options

---

## 4. Software Licensing

Software licensing defines how software may be used, distributed, and modified.

### Types of Licences

**Single-User Licence:**
- Permits installation on one computer
- Most common for consumer software
- User cannot share with others

**Multi-User Licence:**
- Allows installation on multiple computers
- Often used in businesses and schools
- Usually specifies maximum number of users

**Site Licence:**
- Permits installation on all computers at a specific location
- Cost-effective for organisations
- Common in educational institutions

**Subscription Licence:**
- Software access for a defined period (monthly/yearly)
- Includes updates during subscription
- Examples: Microsoft 365, Adobe Creative Cloud

**Freeware:**
- Free to use indefinitely
- Source code typically not available
- Cannot be modified or sold

**Shareware:**
- Free trial period
- Payment required for continued use
- Often has feature limitations in trial version

---

## 5. Common Exam Mistakes and Key Points

### Common Mistakes to Avoid

1. **Confusing System and Application Software:** System software manages the computer; application software performs user tasks. Operating systems and utilities are system software; word processors and games are applications.

2. **Confusing Compilers and Interpreters:** Compilers translate entire programs before execution; interpreters translate line by line during execution.

3. **Forgetting Utility Software:** Don't overlook utilities when asked about system software—antivirus, defragmentation, and backup tools are all system software.

4. **Incomplete Definitions:** When asked to explain what software does, mention both what it does AND why this is useful.

5. **Missing Specific Examples:** Always provide specific software examples when asked about types of software.

### Key Points for Exams

- Operating systems manage hardware resources and provide user interfaces
- Utility software maintains and optimises computer systems
- Compilers produce executable files; interpreters do not
- Open source software has publicly available source code
- Proprietary software is owned and controlled by vendors
- Software licences define usage rights and restrictions

---

## 6. Key Terms and Definitions

| Term | Definition |
|------|------------|
| Software | Programs and data that instruct computers to perform tasks |
| Operating System | System software that manages hardware and provides platform for applications |
| Graphical User Interface (GUI) | Visual interface using windows, icons, menus, and pointers |
| Utility Software | Programs that maintain and optimise computer systems |
| Antivirus | Software that protects against malware |
| Defragmentation | Reorganising files on disk to improve performance |
| Compiler | Translator that converts source code to machine code before execution |
| Interpreter | Translator that executes source code line by line |
| Application Software | Programs that perform specific tasks for users |
| Open Source | Software with publicly available source code |
| Proprietary Software | Commercial software with restricted access to source code |
| Driver | Software that enables OS to communicate with hardware |
| API | Application Programming Interface; allows software components to communicate |

---

*These notes cover the Pearson Edexcel IGCSE ICT specification for Chapter 2: Software. Ensure you understand each concept and can apply them to exam scenarios.*
