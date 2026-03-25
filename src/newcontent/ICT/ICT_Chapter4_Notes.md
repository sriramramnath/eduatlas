# IGCSE ICT — Chapter 4: Digital Communication
## Detailed Notes (Pearson Edexcel Specification)

---

## 1. Introduction to Digital Communication

Digital communication refers to the electronic exchange of information between devices, systems, and individuals. In today's interconnected world, digital communication forms the backbone of modern society, enabling instant global connectivity, real-time collaboration, and seamless data exchange across vast distances. Understanding how digital communication works is essential for comprehending how the internet functions, how devices connect to networks, and how information flows between systems.

Digital communication differs fundamentally from analogue communication. While analogue signals vary continuously, digital signals transmit data as discrete binary values (0s and 1s). This digital approach offers significant advantages including error detection and correction, signal regeneration without degradation, and the ability to multiplex multiple signals on a single channel. However, digital communication also requires conversion processes, appropriate bandwidth, and reliable transmission media to function effectively.

---

## 2. Methods of Digital Communication

### 2.1 Wired Communication

Wired communication uses physical cables to transmit data between devices. Despite the rise of wireless technologies, wired connections remain essential for reliable, high-speed data transfer.

#### Copper Cable

**Twisted Pair Cable:**
Twisted pair cables consist of pairs of copper wires twisted together to reduce electromagnetic interference. This type of cable is widely used in networking and telecommunications.

**Unshielded Twisted Pair (UTP):**
- Most common type for local area networks (LANs)
- Categories: Cat5e (1Gbps), Cat6 (10Gbps), Cat6a (10Gbps improved)
- Used for Ethernet connections
- Cost-effective and easy to install
- Susceptible to some interference

**Shielded Twisted Pair (STP):**
- Includes foil shielding for additional protection
- Better resistance to electromagnetic interference
- More expensive than UTP
- Used in environments with high interference

**Coaxial Cable:**
Coaxial cable features a central copper conductor surrounded by insulation, a metallic shield, and an outer plastic cover.

**Characteristics:**
- Better shielding than twisted pair
- Higher bandwidth capacity
- Used for cable television and some network installations
- More difficult to install than twisted pair

#### Fibre Optic Cable

Fibre optic cables transmit data as pulses of light through thin glass or plastic fibres. This technology offers the highest speeds and longest distances of any wired communication method.

**How Fibre Optics Work:**
- Light pulses represent binary data (on = 1, off = 0)
- Total internal reflection keeps light within the fibre
- Lasers or LEDs generate light pulses
- Photodetectors convert light back to electrical signals

**Types of Fibre Optic Cable:**

| Type | Description | Distance | Applications |
|------|-------------|----------|--------------|
| Single-mode | Thin core, single light path | Up to 100km | Long-distance telecommunications |
| Multi-mode | Thicker core, multiple light paths | Up to 2km | Campus networks, data centres |

**Advantages of Fibre Optics:**
- Extremely high bandwidth (terabits per second)
- Immune to electromagnetic interference
- Secure—difficult to tap without detection
- Long distance without signal degradation
- Smaller and lighter than copper cables

**Disadvantages:**
- Higher cost than copper
- More difficult to install and repair
- Requires specialised equipment
- Fragile compared to copper

### 2.2 Wireless Communication

Wireless communication transmits data through the air using electromagnetic waves, eliminating the need for physical cables.

#### Radio Waves

Radio waves are electromagnetic waves with frequencies from 3kHz to 300GHz. They are used for various communication purposes depending on frequency and wavelength.

**Characteristics:**
- Can travel long distances
- Penetrate walls and obstacles
- Affected by interference from other radio sources
- Regulated by government agencies

**Applications:**
- AM/FM radio broadcasting
- Television broadcasting
- Mobile phone networks
- Wi-Fi networks
- Bluetooth connections

#### Microwave Transmission

Microwaves are high-frequency radio waves (1GHz to 300GHz) used for point-to-point communication.

**Terrestrial Microwave:**
- Uses dish antennas on towers or buildings
- Requires line-of-sight between antennas
- Used for telecommunications between cities
- Affected by weather conditions

**Satellite Microwave:**
- Communication satellites relay signals globally
- Geostationary satellites orbit at 35,786km above Earth
- Enable communication across continents
- Used for broadcasting, GPS, internet access

**Advantages:**
- High bandwidth capacity
- Can cover vast distances
- Suitable for areas without cable infrastructure

**Disadvantages:**
- Expensive infrastructure
- Signal delay (latency) with satellite
- Susceptible to weather interference
- Line-of-sight requirements

#### Infrared

Infrared communication uses infrared light waves for short-range data transfer.

**Characteristics:**
- Very short range (typically less than 10 metres)
- Requires line-of-sight
- Cannot penetrate walls
- Low bandwidth

**Applications:**
- TV remote controls
- Some wireless keyboards and mice
- Short-range data transfer between devices
- Night vision equipment

#### Bluetooth

Bluetooth is a short-range wireless technology standard for connecting devices.

**Technical Specifications:**
- Frequency: 2.4GHz ISM band
- Range: Up to 100 metres (Class 1), typically 10 metres (Class 2)
- Data rate: Up to 3 Mbps (Bluetooth 5.0 up to 2 Mbps)
- Low power consumption

**Applications:**
- Wireless headphones and speakers
- Connecting peripherals (keyboards, mice)
- File transfer between devices
- Hands-free calling in vehicles
- Smart home devices

**Bluetooth Versions:**
- Bluetooth 4.0: Introduced Low Energy (BLE) for IoT devices
- Bluetooth 5.0: Increased range and speed, improved broadcasting
- Bluetooth 5.2: Enhanced audio capabilities

#### Wi-Fi (Wireless Fidelity)

Wi-Fi is a family of wireless network protocols based on IEEE 802.11 standards, providing local area network connectivity without cables.

**Wi-Fi Standards:**

| Standard | Frequency | Max Speed | Year |
|----------|-----------|-----------|------|
| 802.11n (Wi-Fi 4) | 2.4/5GHz | 600 Mbps | 2009 |
| 802.11ac (Wi-Fi 5) | 5GHz | 3.5 Gbps | 2013 |
| 802.11ax (Wi-Fi 6) | 2.4/5GHz | 9.6 Gbps | 2019 |
| Wi-Fi 6E | 6GHz | 9.6 Gbps | 2020 |
| Wi-Fi 7 | 2.4/5/6GHz | 46 Gbps | 2024 |

**Wi-Fi Components:**
- **Wireless Access Point (WAP):** Connects wireless devices to a wired network
- **Wireless Router:** Combines WAP, router, and often a switch
- **Wireless Network Adapter:** Enables devices to connect to Wi-Fi

**Wi-Fi Security:**
- **WEP (Wired Equivalent Privacy):** Original, now insecure
- **WPA (Wi-Fi Protected Access):** Improved security
- **WPA2:** Current standard using AES encryption
- **WPA3:** Latest standard with enhanced security features

#### Mobile Networks (Cellular)

Mobile networks provide wide-area wireless connectivity through a network of cell towers.

**Mobile Network Generations:**

| Generation | Technology | Speed | Features |
|------------|------------|-------|----------|
| 2G | GSM, GPRS | 64 Kbps | Voice, SMS, basic data |
| 3G | UMTS, HSPA | 2-42 Mbps | Mobile internet, video calls |
| 4G | LTE | 100 Mbps-1 Gbps | High-speed internet, streaming |
| 5G | NR | Up to 20 Gbps | Ultra-low latency, IoT, autonomous vehicles |

**How Mobile Networks Work:**
- Coverage area divided into cells, each with a base station
- Devices connect to the nearest cell tower
- Network hands off connections as users move between cells
- Core network routes calls and data to destinations

---

## 3. Factors Affecting Digital Communication

### 3.1 Bandwidth

Bandwidth refers to the maximum rate of data transfer across a network path, measured in bits per second (bps).

**Understanding Bandwidth:**
- Higher bandwidth = more data can be transmitted simultaneously
- Affects download/upload speeds
- Shared bandwidth affects multiple users

**Units of Measurement:**
- Kilobits per second (Kbps): 1,000 bps
- Megabits per second (Mbps): 1,000,000 bps
- Gigabits per second (Gbps): 1,000,000,000 bps

**Note:** Internet speeds are typically advertised in Mbps, but files are measured in bytes (8 bits = 1 byte). A 100 Mbps connection can download at approximately 12.5 MB per second.

**Bandwidth vs Speed:**
- Bandwidth: Maximum capacity of the connection
- Speed: How fast data actually travels
- A narrow road with fast cars vs a wide road with slower cars

### 3.2 Latency

Latency is the time delay between sending and receiving data, measured in milliseconds (ms).

**Types of Latency:**
- **Propagation delay:** Time for signal to travel the distance
- **Transmission delay:** Time to push all data onto the link
- **Processing delay:** Time for network devices to process data
- **Queuing delay:** Time data waits in queues at routers

**Impact on Applications:**
- Video calls: Causes lag and awkward pauses
- Online gaming: Causes lag between player actions
- Streaming: Can cause buffering
- General browsing: Delayed page loads

**Causes of Latency:**
- Distance between sender and receiver
- Number of routers/servers data passes through
- Network congestion
- Processing delays at each hop
- Satellite connections (long distance to orbit)

### 3.3 Interference

Interference disrupts wireless signals, reducing quality and reliability.

**Types of Interference:**
- **Electromagnetic interference (EMI):** From electrical equipment
- **Radio frequency interference (RFI):** From other radio sources
- **Physical obstacles:** Walls, buildings, terrain
- **Weather conditions:** Rain, snow, atmospheric conditions

**Wi-Fi Interference Sources:**
- Other Wi-Fi networks on same channel
- Microwave ovens (2.4GHz frequency)
- Bluetooth devices
- Baby monitors and cordless phones
- Physical barriers (concrete, metal)

**Reducing Interference:**
- Use 5GHz band instead of 2.4GHz (less congested)
- Position routers away from interference sources
- Use wired connections for critical applications
- Select less congested Wi-Fi channels

### 3.4 Distance

Distance affects signal strength and quality in both wired and wireless communication.

**Wireless Distance Considerations:**
- Signal strength decreases with distance (inverse square law)
- Wi-Fi range: 30-100 metres indoors
- Bluetooth range: 10-100 metres depending on class
- Mobile networks: Kilometres between towers

**Wired Distance Considerations:**
- Copper cables: Maximum 100 metres for Ethernet
- Fibre optics: Can span kilometres without repeaters
- Signal repeaters extend distance for long runs

### 3.5 Number of Users

More users sharing a connection reduces available bandwidth per user.

**Contention Ratio:**
The contention ratio indicates how many users share a connection:
- 50:1 ratio: 50 users share one connection (typical home broadband)
- 20:1 ratio: Better performance (business connections)
- 1:1 ratio: Dedicated connection (leased lines)

**Impact of Multiple Users:**
- Streaming video uses significant bandwidth
- Multiple streams slow other activities
- Peak times (evenings) see reduced speeds
- Quality of Service (QoS) can prioritise important traffic

---

## 4. Communication Protocols

### 4.1 What are Protocols?

Protocols are standardised rules that govern how data is transmitted and received. They ensure different devices and systems can communicate effectively.

**Protocol Functions:**
- Define data format and structure
- Establish connection procedures
- Handle error detection and correction
- Manage data flow and timing
- Control session termination

### 4.2 Common Protocols

#### TCP/IP (Transmission Control Protocol/Internet Protocol)

TCP/IP is the fundamental protocol suite for internet communication.

**TCP (Transmission Control Protocol):**
- Provides reliable, ordered delivery of data
- Breaks data into packets
- Numbers packets for reassembly
- Confirms receipt of packets
- Resends lost packets

**IP (Internet Protocol):**
- Addresses and routes packets to destinations
- Uses IP addresses to identify devices
- Handles packet forwarding between networks
- Does not guarantee delivery (TCP handles reliability)

#### HTTP/HTTPS (Hypertext Transfer Protocol)

HTTP governs communication between web browsers and servers.

**HTTP:**
- Transmits web pages and resources
- Uses port 80
- Unencrypted (plain text transmission)
- State-less protocol (no memory of previous requests)

**HTTPS:**
- Secure version using SSL/TLS encryption
- Uses port 443
- Encrypts all data between browser and server
- Required for sensitive transactions (banking, shopping)

#### FTP (File Transfer Protocol)

FTP enables file transfer between computers.

**Characteristics:**
- Uses ports 20 and 21
- Supports upload and download
- Can authenticate users
- Used for website updates, large file transfers

**Security Concerns:**
- Standard FTP transmits passwords in plain text
- SFTP (SSH File Transfer Protocol) provides secure transfer
- FTPS (FTP Secure) adds SSL/TLS encryption

#### SMTP, POP3, and IMAP (Email Protocols)

These protocols handle different aspects of email communication:

| Protocol | Full Name | Function | Port |
|----------|-----------|----------|------|
| SMTP | Simple Mail Transfer Protocol | Sends emails | 25, 587 |
| POP3 | Post Office Protocol v3 | Downloads emails from server | 110 |
| IMAP | Internet Message Access Protocol | Accesses emails on server | 143 |

**Protocol Usage:**
- SMTP: Used to send emails from client to server and between servers
- POP3: Downloads emails to local device, typically deletes from server
- IMAP: Syncs emails across devices, keeps on server

#### DNS (Domain Name System)

DNS translates human-readable domain names to IP addresses.

**How DNS Works:**
1. User enters domain name (www.example.com)
2. DNS resolver queries DNS servers
3. Servers return corresponding IP address
4. Browser connects to IP address

**Why DNS Matters:**
- Humans remember names better than numbers
- Allows servers to change IP without affecting users
- Enables load balancing across multiple servers

---

## 5. Data Transmission

### 5.1 Data Packets

Data is broken into small packets for transmission across networks.

**Packet Structure:**
- **Header:** Contains source and destination addresses, sequence number
- **Payload:** Actual data being transmitted
- **Trailer:** Contains error checking information

**Packet Switching:**
- Packets can take different routes to destination
- Packets reassembled at destination
- More efficient than dedicated connections
- Basis of internet communication

### 5.2 Transmission Modes

**Simplex:**
- Data flows in one direction only
- Example: Television broadcast (transmitter to receiver only)

**Half-Duplex:**
- Data flows in both directions, but not simultaneously
- Example: Walkie-talkie (one speaks at a time)

**Full-Duplex:**
- Data flows in both directions simultaneously
- Example: Telephone conversation (both can speak and hear)

### 5.3 Error Detection

**Checksums:**
- Mathematical calculation on data
- Receiving device recalculates and compares
- Detects transmission errors

**Parity Bits:**
- Extra bit added to data
- Indicates whether number of 1s is even or odd
- Simple but limited error detection

---

## 6. Common Exam Mistakes and Key Points

### Common Mistakes to Avoid

1. **Confusing Bandwidth and Speed:** Bandwidth is capacity (how much data), speed is latency (how fast data travels). Think of bandwidth as the width of a pipe, not the speed of water.

2. **Forgetting Security Protocols:** When discussing web communication, always mention HTTPS for secure connections.

3. **Overlooking Latency:** When asked about factors affecting communication quality, latency is as important as bandwidth.

4. **Confusing Protocols:** Know which protocol does what—HTTP for web, SMTP for sending email, IMAP/POP3 for receiving.

5. **Units:** Use correct units (Mbps for bandwidth, ms for latency).

### Key Points for Exams

- Fibre optics offer highest speed and longest distance
- Wi-Fi uses radio waves; Bluetooth is short-range
- Bandwidth = capacity; Latency = delay
- TCP/IP is fundamental internet protocol
- HTTPS provides encryption for web traffic
- Multiple users share bandwidth, reducing per-user speed
- Distance and interference affect wireless signal quality

---

## 7. Key Terms and Definitions

| Term | Definition |
|------|------------|
| Bandwidth | Maximum data transfer rate (measured in bps) |
| Latency | Time delay in data transmission (measured in ms) |
| Fibre Optic | Cable transmitting data as light pulses |
| Protocol | Standardised rules for data communication |
| TCP/IP | Core internet protocol suite |
| HTTP/HTTPS | Protocol for web communication |
| Wi-Fi | Wireless local area network technology |
| Bluetooth | Short-range wireless technology |
| Packet | Unit of data transmitted over networks |
| Interference | Disruption of wireless signals |
| Full-Duplex | Two-way simultaneous communication |
| DNS | System translating domain names to IP addresses |

---

*These notes cover the Pearson Edexcel IGCSE ICT specification for Chapter 4: Digital Communication. Ensure you understand each concept and can apply them to exam scenarios.*
