# IGCSE ICT — Chapter 5: Networks
## Detailed Notes (Pearson Edexcel Specification)

---

## 1. Introduction to Networks

A network is a collection of computers and other devices connected together to share resources, communicate, and exchange data. Networks range from simple connections between two computers to complex global infrastructures like the internet. Understanding networks is essential in modern computing, as virtually all digital communication relies on network connectivity.

Networks enable organisations and individuals to share expensive resources (printers, storage, internet connections), communicate efficiently (email, messaging, video calls), and access shared information (databases, files, websites). The design and management of networks requires understanding of both hardware components and software protocols that enable communication.

---

## 2. Types of Networks

### 2.1 Local Area Network (LAN)

A Local Area Network connects devices within a limited geographical area, such as a home, office, school, or single building.

**Characteristics:**
- Geographic scope: Single building or campus (typically under 1km)
- Ownership: Usually owned and managed by a single organisation
- Speed: High data transfer rates (typically 100 Mbps to 10 Gbps)
- Technology: Usually Ethernet (wired) or Wi-Fi (wireless)
- Low latency due to short distances

**Components of a LAN:**
- Computers and servers
- Network switches
- Routers
- Network cables or wireless access points
- Network interface cards (NICs)

**Advantages of LANs:**
- Resource sharing (printers, files, internet connection)
- Centralised data management
- Easy communication between users
- Shared applications and services
- Centralised security management
- Cost-effective for small areas

**Disadvantages of LANs:**
- Initial setup costs
- Requires network administration
- Security risks if not properly managed
- Limited geographic coverage
- Network failures affect all connected users

**LAN Use Cases:**
- School computer labs
- Office networks
- Home networks
- Hospital departments
- Manufacturing facilities

### 2.2 Wide Area Network (WAN)

A Wide Area Network connects devices across large geographical areas, potentially spanning cities, countries, or continents.

**Characteristics:**
- Geographic scope: Cities, countries, or global
- Ownership: Usually involves third-party telecommunications providers
- Speed: Variable, typically slower than LANs
- Technology: Leased lines, satellite, fibre optic backbones
- Higher latency due to longer distances

**WAN Technologies:**
- Leased lines (dedicated connections)
- MPLS (Multi-Protocol Label Switching)
- Internet VPNs (Virtual Private Networks)
- Satellite links
- Fibre optic backbone connections

**Advantages of WANs:**
- Enables communication across large distances
- Connects geographically dispersed offices
- Access to centralised resources from remote locations
- Supports global business operations

**Disadvantages of WANs:**
- Higher costs (telecommunications charges)
- Lower speeds than LANs
- Higher latency
- More complex setup and maintenance
- Dependency on third-party providers

**WAN Examples:**
- The Internet (largest WAN)
- Corporate networks connecting global offices
- Banking networks connecting branches
- Government networks spanning regions

### 2.3 Wireless Networks

Wireless networks use radio waves or other wireless technologies to connect devices without physical cables.

**Types of Wireless Networks:**

**Wireless LAN (WLAN):**
- Uses Wi-Fi technology
- Follows IEEE 802.11 standards
- Extends LAN connectivity without cables
- Typical range: 30-100 metres indoors

**Wireless PAN (WPAN):**
- Very short range (typically 10 metres)
- Uses Bluetooth technology
- Connects personal devices
- Examples: Wireless headphones, smartwatches

**Wireless WAN (WWAN):**
- Uses mobile network technology (4G, 5G)
- Provides internet access over wide areas
- Enables mobile connectivity

**Advantages of Wireless Networks:**
- Mobility—users can move within coverage area
- No cables required for connectivity
- Easier to add new devices
- Can reach difficult-to-wire locations
- Temporary network setups possible

**Disadvantages of Wireless Networks:**
- Generally slower than wired networks
- Susceptible to interference
- Security concerns (signals can be intercepted)
- Coverage dead spots
- Signal affected by walls and obstacles

### 2.4 Personal Area Network (PAN)

A Personal Area Network connects devices around an individual person, typically within a few metres.

**Characteristics:**
- Very short range (typically 1-10 metres)
- Personal devices connected together
- Usually wireless (Bluetooth, infrared)
- Low power consumption

**Examples:**
- Smartphone connected to wireless headphones
- Laptop connected to wireless mouse and keyboard
- Fitness tracker syncing with smartphone
- Smartwatch receiving notifications from phone

---

## 3. Network Hardware

### 3.1 Network Interface Card (NIC)

A Network Interface Card enables a device to connect to a network. Every NIC has a unique Media Access Control (MAC) address assigned by the manufacturer.

**Functions of a NIC:**
- Converts data to network signals and vice versa
- Provides physical connection to network medium
- Handles data transmission and reception
- Implements network protocols at hardware level

**Types of NICs:**
- Wired Ethernet NICs (RJ-45 connector)
- Wireless NICs (Wi-Fi)
- Built-in (integrated on motherboard) or expansion cards

### 3.2 Switch

A switch is a networking device that connects devices on a LAN and forwards data to the correct destination device.

**How Switches Work:**
- Learns MAC addresses of connected devices
- Creates a table mapping ports to MAC addresses
- Forwards data only to the intended recipient port
- Reduces unnecessary network traffic compared to hubs

**Switch Advantages:**
- Dedicated bandwidth to each port
- Full-duplex communication
- Reduces network collisions
- Improves network performance
- Enables network segmentation

**Managed vs Unmanaged Switches:**
- **Unmanaged:** Basic plug-and-play, no configuration
- **Managed:** Advanced features like VLANs, QoS, monitoring

### 3.3 Router

A router connects different networks together and directs data packets between them.

**Router Functions:**
- Connects LANs to WANs (including the internet)
- Routes data packets to destinations
- Provides IP address assignment (DHCP)
- Network Address Translation (NAT)
- Firewall and security features
- Quality of Service (QoS) management

**How Routers Work:**
1. Receive data packets
2. Examine destination IP address
3. Consult routing table to determine best path
4. Forward packet to next hop or destination network
5. Handle protocol conversions if necessary

**Home Routers:**
Typically combine multiple functions:
- Router (connects to internet)
- Switch (for wired LAN connections)
- Wireless access point (for Wi-Fi)
- Firewall (basic security)
- DHCP server (assigns IP addresses)

### 3.4 Wireless Access Point (WAP)

A Wireless Access Point allows wireless devices to connect to a wired network using Wi-Fi.

**WAP Functions:**
- Bridges wireless and wired networks
- Broadcasts network name (SSID)
- Authenticates wireless clients
- Manages wireless connections
- May provide multiple frequency bands

**WAP Placement Considerations:**
- Central location for even coverage
- Avoid interference sources
- Consider building materials (concrete blocks signals)
- Multiple WAPs for larger areas

### 3.5 Modem

A modem (modulator-demodulator) converts digital signals to analogue for transmission over telephone or cable lines, and vice versa.

**Types of Modems:**
- **Cable modem:** For cable internet connections
- **DSL modem:** For telephone line broadband
- **Fibre modem (ONT):** For fibre optic connections
- **Mobile modem:** For cellular data connections

**Modem Functions:**
- Modulates digital data to analogue signals for transmission
- Demodulates incoming analogue signals to digital data
- Provides connection to ISP network
- May include router functionality (combined units)

### 3.6 Hub

A hub is a basic networking device that broadcasts data to all connected ports. Hubs are largely obsolete, replaced by switches.

**Hub Characteristics:**
- Broadcasts all data to all ports
- No intelligence about destination
- Shared bandwidth among all ports
- Creates collision domain for all devices
- Half-duplex only

**Why Hubs are Obsolete:**
- Switches provide better performance
- Switches reduce unnecessary traffic
- Switches enable full-duplex communication
- Hubs are rarely used in modern networks

---

## 4. Network Topologies

Network topology refers to the physical or logical arrangement of devices in a network.

### 4.1 Star Topology

In a star topology, all devices connect to a central device (switch or hub).

**Structure:**
```
        Device
           |
    Device--Switch--Device
           |
        Device
```

**Advantages:**
- Easy to add new devices
- Failure of one device doesn't affect others
- Easy to troubleshoot (faults isolated)
- Better performance than bus topology
- Centralised management

**Disadvantages:**
- If central device fails, entire network fails
- Requires more cable than bus topology
- Central device is a potential bottleneck
- More expensive due to central hardware

**Use Cases:** Most common LAN topology, office networks, school networks

### 4.2 Bus Topology

In a bus topology, all devices connect to a single central cable (the bus).

**Structure:**
```
Device---Device---Device---Device---Terminator
    |_________Bus Cable___________|
```

**Advantages:**
- Easy and inexpensive to install
- Requires less cable than star
- Good for small networks

**Disadvantages:**
- If main cable fails, entire network fails
- Performance degrades as devices added
- Difficult to troubleshoot
- Limited cable length
- Network disruption when adding devices

**Use Cases:** Rarely used in modern networks; historical significance

### 4.3 Mesh Topology

In a mesh topology, devices connect to multiple other devices, creating multiple paths for data.

**Full Mesh:** Every device connects to every other device
**Partial Mesh:** Devices connect to some, but not all, other devices

**Advantages:**
- Highly redundant—multiple paths exist
- Fault tolerant—traffic rerouted if link fails
- Good for critical network infrastructure

**Disadvantages:**
- Expensive (many connections)
- Complex to set up and manage
- Impractical for large networks

**Use Cases:** Internet backbone, critical business systems, military networks

### 4.4 Ring Topology

In a ring topology, devices connect in a circular chain, with data travelling in one direction.

**Structure:**
```
    Device
      /    \
  Device   Device
      \    /
    Device
```

**Advantages:**
- Equal access to network resources
- No collisions
- Can cover larger distances than bus

**Disadvantages:**
- One device failure affects entire network
- Adding devices disrupts network
- Slower than star topology
- Difficult to troubleshoot

**Use Cases:** Some token ring networks (historical), certain industrial networks

---

## 5. Network Addressing

### 5.1 IP Addresses

An IP (Internet Protocol) address is a unique numerical identifier assigned to each device on a network.

**IPv4 Addresses:**
- Format: Four numbers separated by dots (e.g., 192.168.1.1)
- Each number ranges from 0 to 255
- Approximately 4.3 billion possible addresses
- Becoming exhausted due to internet growth

**IPv6 Addresses:**
- Format: Eight groups of hexadecimal numbers (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)
- Approximately 340 undecillion addresses
- Designed to replace IPv4
- Being gradually adopted

**Static vs Dynamic IP Addresses:**

| Type | Assignment | Use Case |
|------|------------|----------|
| Static | Manually configured | Servers, printers, network devices |
| Dynamic | Assigned by DHCP server | Client computers, mobile devices |

### 5.2 MAC Addresses

A MAC (Media Access Control) address is a unique identifier assigned to network hardware by the manufacturer.

**Characteristics:**
- Format: Six pairs of hexadecimal numbers (e.g., 00:1A:2B:3C:4D:5E)
- First three pairs identify manufacturer
- Last three pairs identify specific device
- Permanent (cannot be changed)
- Used for local network communication

**MAC Address Functions:**
- Identifies devices on a LAN
- Used by switches to forward data
- Can be used for network filtering
- Provides hardware-level identification

### 5.3 DHCP (Dynamic Host Configuration Protocol)

DHCP automatically assigns IP addresses and network configuration to devices.

**DHCP Process:**
1. Device connects to network
2. Device broadcasts DHCP discover message
3. DHCP server offers an IP address
4. Device requests the offered address
5. Server confirms the assignment

**DHCP Benefits:**
- Eliminates manual IP configuration
- Prevents IP address conflicts
- Efficient use of available addresses
- Simplifies network management

---

## 6. Network Security

### 6.1 Firewalls

A firewall monitors and controls incoming and outgoing network traffic based on security rules.

**Firewall Functions:**
- Blocks unauthorised access
- Filters traffic based on rules
- Logs network activity
- Can prevent malware communication

**Types of Firewalls:**
- **Software firewalls:** Installed on individual computers
- **Hardware firewalls:** Dedicated network devices
- **Stateful firewalls:** Track connection states
- **Next-generation firewalls:** Include advanced threat detection

### 6.2 Proxy Servers

A proxy server acts as an intermediary between clients and servers.

**Proxy Functions:**
- Hides client IP address (anonymity)
- Can filter content
- Caches frequently accessed content
- Logs internet activity
- Can bypass geographic restrictions

### 6.3 VPN (Virtual Private Network)

A VPN creates a secure, encrypted connection over a public network.

**VPN Benefits:**
- Secure remote access to company networks
- Encrypted data transmission
- Privacy protection on public Wi-Fi
- Appears to be in different location

---

## 7. Common Exam Mistakes and Key Points

### Common Mistakes to Avoid

1. **Confusing Switch and Router:** Switches connect devices on the same network; routers connect different networks.

2. **Forgetting MAC vs IP:** MAC addresses are hardware addresses (permanent); IP addresses are network addresses (can change).

3. **Topology Confusion:** Star uses central device; mesh has multiple connections; ring is circular.

4. **LAN vs WAN:** LAN is local (building); WAN is wide (cities/countries). The internet is the largest WAN.

### Key Points for Exams

- Star topology is most common for LANs
- Routers connect networks; switches connect devices
- DHCP assigns IP addresses automatically
- Firewalls filter network traffic
- VPNs provide secure remote access
- IPv6 addresses the IPv4 shortage

---

## 8. Key Terms and Definitions

| Term | Definition |
|------|------------|
| LAN | Local Area Network; network in limited geographic area |
| WAN | Wide Area Network; network spanning large geographic area |
| Switch | Device connecting devices on same network |
| Router | Device connecting different networks |
| NIC | Network Interface Card; enables network connection |
| IP Address | Numerical identifier for devices on network |
| MAC Address | Hardware address assigned by manufacturer |
| DHCP | Protocol for automatic IP address assignment |
| Firewall | Security device filtering network traffic |
| Topology | Physical or logical arrangement of network |
| VPN | Virtual Private Network; encrypted connection |
| SSID | Service Set Identifier; Wi-Fi network name |

---

*These notes cover the Pearson Edexcel IGCSE ICT specification for Chapter 5: Networks. Ensure you understand each concept and can apply them to exam scenarios.*
