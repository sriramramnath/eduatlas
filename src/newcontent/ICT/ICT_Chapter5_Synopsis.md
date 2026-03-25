# IGCSE ICT — Chapter 5: Networks
## Concise Synopsis (Pearson Edexcel Specification)

---

## Quick Reference Summary

### 1. Network Types Comparison

| Network | Scope | Example | Typical Speed |
|---------|-------|---------|---------------|
| **LAN** | Single building/campus | School, office | 100Mbps-10Gbps |
| **WAN** | Cities/countries/global | Internet, corporate | Variable |
| **WLAN** | Wireless LAN | Home Wi-Fi | Up to 9.6Gbps |
| **PAN** | Personal (few metres) | Bluetooth devices | Up to 3Mbps |

---

### 2. Network Hardware

| Device | Function | Key Feature |
|--------|----------|-------------|
| **NIC** | Connects device to network | Has unique MAC address |
| **Switch** | Connects devices on LAN | Sends data to specific port |
| **Router** | Connects different networks | Routes packets, provides DHCP |
| **WAP** | Wireless connectivity | Converts wired to wireless |
| **Modem** | Connects to ISP | Modulates/demodulates signals |
| **Hub** | Basic connectivity | Broadcasts to all ports (obsolete) |

---

### 3. Network Topologies

| Topology | Structure | Advantages | Disadvantages |
|----------|-----------|------------|---------------|
| **Star** | Central device (switch) | Easy troubleshooting; one failure doesn't affect others | Central device is single point of failure |
| **Bus** | Single cable | Cheap; easy to install | Entire network fails if cable breaks |
| **Mesh** | Multiple connections | Highly reliable; fault tolerant | Expensive; complex |
| **Ring** | Circular chain | Equal access; no collisions | One failure affects all |

---

### 4. Star Topology (Most Common)

```
        [PC]
          |
   [PC]--[Switch]--[PC]
          |
        [PC]
```

**Why Star is Preferred:**
- Easy to add/remove devices
- Fault isolation (one device failure doesn't affect others)
- Centralised management
- Better performance

---

### 5. Network Addressing

| Address Type | Format | Assigned By | Changeable? |
|--------------|--------|-------------|-------------|
| **MAC Address** | 00:1A:2B:3C:4D:5E | Manufacturer | No (permanent) |
| **IPv4 Address** | 192.168.1.1 | DHCP or manual | Yes |
| **IPv6 Address** | 2001:db8::1 | DHCP or manual | Yes |

---

### 6. DHCP Process

```
Device → DHCP Server: "Discover" (Looking for IP)
DHCP Server → Device: "Offer" (Here's an IP)
Device → DHCP Server: "Request" (I'll take it)
DHCP Server → Device: "Acknowledge" (Confirmed)
```

---

### 7. Network Security

| Security Measure | Function |
|------------------|----------|
| **Firewall** | Filters incoming/outgoing traffic |
| **Proxy Server** | Intermediary; hides IP; caches content |
| **VPN** | Encrypted tunnel over public network |
| **WPA2/WPA3** | Wi-Fi encryption standards |

---

### 8. Hardware Comparison: Switch vs Router

| Feature | Switch | Router |
|---------|--------|--------|
| **Connects** | Devices on same network | Different networks |
| **Addressing** | Uses MAC addresses | Uses IP addresses |
| **Intelligence** | Learns device locations | Calculates best routes |
| **Position** | Inside LAN | Edge of network |

---

### 9. High-Yield Exam Points

**Must-Know Facts:**

- **Star topology is most common** — central switch/hub
- **Switch forwards to specific device** — hub broadcasts to all
- **Router connects LAN to WAN** (internet)
- **MAC address is permanent** — IP address can change
- **DHCP assigns IP automatically**
- **Firewall blocks unauthorised access**
- **VPN encrypts data over public networks**
- **WPA2/WPA3 secure Wi-Fi networks**

**Key Distinctions:**

| Question | Answer |
|----------|--------|
| Which device connects different networks? | Router |
| Which device uses MAC addresses? | Switch |
| Which topology has central device? | Star |
| Which provides automatic IP assignment? | DHCP |
| Which encrypts connection over internet? | VPN |

---

### 10. Quick Definition List

| Term | Definition |
|------|------------|
| **LAN** | Local Area Network covering small area |
| **WAN** | Wide Area Network covering large area |
| **Topology** | Physical/logical arrangement of network |
| **Switch** | Device connecting devices on same network |
| **Router** | Device connecting different networks |
| **NIC** | Network Interface Card for device connection |
| **MAC Address** | Unique hardware identifier |
| **IP Address** | Network address for routing |
| **DHCP** | Protocol for automatic IP assignment |
| **Firewall** | Security device filtering traffic |
| **VPN** | Secure encrypted tunnel over public network |

---

### 11. Exam Tips

1. **Know device functions** — switch vs router vs hub
2. **Understand topology pros/cons** — especially star
3. **Distinguish MAC and IP addresses** — hardware vs network
4. **Explain DHCP purpose** — automatic configuration
5. **Describe security measures** — firewall, VPN, encryption
6. **Use correct terminology** — switch, router, WAP

---

*This synopsis provides a condensed overview for quick revision. Refer to detailed notes for comprehensive understanding.*
