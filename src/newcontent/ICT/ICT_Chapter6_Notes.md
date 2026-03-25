# IGCSE ICT — Chapter 6: Risks to Data and Personal Information
## Detailed Notes (Pearson Edexcel Specification)

---

## 1. Introduction to Data Security

In our increasingly digital world, data has become one of the most valuable assets individuals and organisations possess. Personal information, financial records, intellectual property, and sensitive communications are all stored, transmitted, and processed digitally. This digital transformation brings enormous benefits but also significant risks. Understanding these risks and how to mitigate them is essential for anyone using digital technologies.

Data security encompasses the practices, technologies, and policies designed to protect digital information from unauthorised access, corruption, theft, or destruction. As the volume of data grows exponentially, so do the threats targeting it. This chapter explores the various risks to data and personal information, the methods used by attackers, and the protective measures that can be implemented.

---

## 2. Types of Data Risks

### 2.1 Malware (Malicious Software)

Malware is software specifically designed to disrupt, damage, or gain unauthorised access to computer systems. Understanding different types of malware is essential for effective protection.

#### Viruses

A computer virus is a type of malware that attaches itself to legitimate programs or files and replicates when the host program is executed.

**Characteristics:**
- Requires a host file or program to attach to
- Spreads by infecting other files
- Activates when infected file is opened
- Can corrupt or delete files
- Spreads through shared files and email attachments

**Examples:**
- File infectors: Attach to executable files
- Boot sector viruses: Infect the master boot record
- Macro viruses: Infect documents with macro capabilities

#### Worms

Worms are self-replicating malware that spread across networks without requiring user action or host files.

**Characteristics:**
- Self-contained; doesn't need host file
- Spreads automatically across networks
- Exploits security vulnerabilities to propagate
- Can consume network bandwidth
- Often carry harmful payloads

**Impact:**
- Network congestion
- System slowdown
- Opening backdoors for other malware
- Data theft or destruction

#### Trojan Horses

Trojans disguise themselves as legitimate software to trick users into installing them.

**Characteristics:**
- Appears to be useful or legitimate software
- Does not replicate like viruses or worms
- Creates backdoors for unauthorised access
- Steals data or gives remote control
- Named after the Greek legend of the Trojan Horse

**Types of Trojans:**
- **Backdoor Trojans:** Provide remote access to attackers
- **Banking Trojans:** Steal financial information
- **Downloader Trojans:** Download additional malware
- **Ransomware Trojans:** Encrypt files for ransom

#### Ransomware

Ransomware encrypts victims' files and demands payment for the decryption key.

**How Ransomware Works:**
1. Infects system through phishing email or malicious download
2. Encrypts important files on local and network drives
3. Displays ransom demand with payment instructions
4. Threatens data loss or public release if not paid
5. Payment typically demanded in cryptocurrency

**Examples:**
- WannaCry (2017): Affected 200,000+ computers globally
- CryptoLocker: Early ransomware targeting Windows systems
- Ryuk: Targeted attacks on organisations

**Prevention:**
- Regular backups (offline storage)
- Keep software updated
- User education on phishing
- Antivirus with ransomware protection

#### Spyware

Spyware secretly monitors user activity and collects information without consent.

**What Spyware Collects:**
- Login credentials and passwords
- Credit card and banking information
- Browsing history and habits
- Keystrokes (keyloggers)
- Personal documents and files

**How Spyware Spreads:**
- Bundled with legitimate software
- Malicious websites and downloads
- Email attachments
- Security vulnerabilities

#### Adware

Adware displays unwanted advertisements and may track user behaviour for targeted advertising.

**Characteristics:**
- Displays pop-up advertisements
- Redirects browser to advertising sites
- Collects browsing data for targeted ads
- Often bundled with free software
- Can slow system performance

### 2.2 Phishing and Social Engineering

#### Phishing

Phishing is a fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity.

**Types of Phishing:**

| Type | Target | Method |
|------|--------|--------|
| Email Phishing | Mass audience | Fake emails mimicking legitimate organisations |
| Spear Phishing | Specific individuals | Personalised emails using known information |
| Whaling | Senior executives | Highly targeted attacks on high-value targets |
| Smishing | Mobile users | Phishing via SMS messages |
| Vishing | Phone users | Voice phishing phone calls |

**How to Identify Phishing:**
- Suspicious sender email address
- Generic greetings ("Dear Customer")
- Urgent action requests
- Suspicious links (hover to check URL)
- Spelling and grammar errors
- Requests for sensitive information
- Threats of account closure

**Example Phishing Email Indicators:**
```
From: security@bank0famerica.com (fake domain)
Subject: Urgent: Your account will be closed!

Dear Valued Customer,

We detected unusual activity on your account.
Click here immediately to verify your identity...
[Link leads to fake website]
```

#### Social Engineering

Social engineering manipulates people into divulging confidential information or performing actions that compromise security.

**Techniques:**
- **Pretexting:** Creating a fabricated scenario to extract information
- **Baiting:** Offering something enticing to lure victims
- **Quid pro quo:** Offering service in exchange for information
- **Tailgating:** Following authorised personnel into secure areas
- **Impersonation:** Posing as someone with legitimate access

### 2.3 Data Interception

Data interception involves capturing data as it travels across networks.

#### Man-in-the-Middle (MITM) Attacks

In a MITM attack, the attacker secretly intercepts and possibly alters communication between two parties.

**How MITM Works:**
1. Attacker positions between user and destination
2. Intercepts all communication
3. Can read, modify, or inject data
4. Victim believes they're communicating directly

**Prevention:**
- Use HTTPS (encrypted connections)
- Avoid public Wi-Fi for sensitive activities
- Use VPN on untrusted networks
- Verify SSL certificates

#### Packet Sniffing

Packet sniffing captures data packets as they travel across a network.

**Uses:**
- Legitimate: Network troubleshooting, security monitoring
- Malicious: Stealing unencrypted data, capturing passwords

**Protection:**
- Encrypt sensitive communications
- Use secure protocols (HTTPS, SFTP)
- Implement network segmentation

### 2.4 Unauthorised Access

Unauthorised access occurs when individuals gain access to systems or data without permission.

#### Methods of Unauthorised Access

**Brute Force Attacks:**
- Systematically trying all possible passwords
- Effective against weak passwords
- Slow but eventually successful

**Dictionary Attacks:**
- Using lists of common passwords
- Faster than brute force
- Effective against predictable passwords

**Credential Stuffing:**
- Using leaked username/password combinations
- Takes advantage of password reuse
- Automated attacks on multiple sites

**Password Cracking:**
- Recovering passwords from stored hashes
- Uses rainbow tables or calculation
- Easier with weak password policies

### 2.5 Accidental Data Loss

Not all data risks come from malicious actors. Accidental data loss is equally concerning.

**Causes:**
- Human error (accidental deletion, misconfigurations)
- Hardware failure (hard drive crashes)
- Software bugs (data corruption)
- Natural disasters (fire, flood)
- Power failures
- Lost or stolen devices

**Impact:**
- Loss of irreplaceable data
- Business disruption
- Financial losses
- Reputational damage

---

## 3. Protecting Data and Information

### 3.1 Technical Protection Measures

#### Firewalls

Firewalls monitor and control network traffic based on security rules.

**Types:**
- **Software firewalls:** Installed on individual computers
- **Hardware firewalls:** Dedicated network devices
- **Stateful firewalls:** Track connection states
- **Next-generation firewalls:** Include intrusion prevention, deep packet inspection

**Firewall Functions:**
- Block unauthorised incoming connections
- Prevent malware communication
- Filter content and applications
- Log security events
- Create security zones

#### Antivirus and Anti-Malware Software

Antivirus software detects, prevents, and removes malware.

**Detection Methods:**
- **Signature-based:** Matches known malware signatures
- **Heuristic analysis:** Identifies suspicious behaviour
- **Behavioural monitoring:** Detects unusual activity
- **Sandboxing:** Runs suspicious code in isolation

**Best Practices:**
- Keep virus definitions updated
- Enable real-time protection
- Schedule regular full system scans
- Don't disable protection for convenience

#### Encryption

Encryption converts readable data into unreadable code that can only be decrypted with a key.

**Types of Encryption:**

| Type | Use Case | Example |
|------|----------|---------|
| Symmetric | Fast encryption of large data | AES (file encryption) |
| Asymmetric | Secure key exchange | RSA (digital signatures) |
| End-to-end | Communication security | WhatsApp messages |
| Full disk | Device protection | BitLocker, FileVault |

**What to Encrypt:**
- Stored files and documents
- Email communications
- Network transmissions
- Backup files
- Mobile devices

#### Strong Passwords and Authentication

**Strong Password Characteristics:**
- Minimum 12 characters
- Mix of upper and lower case letters
- Include numbers and special characters
- Not based on personal information
- Unique for each account
- Changed regularly

**Authentication Methods:**

| Method | Security Level | Example |
|--------|----------------|---------|
| Single-factor | Low | Password only |
| Two-factor (2FA) | Medium | Password + SMS code |
| Multi-factor (MFA) | High | Password + app + biometric |
| Biometric | High | Fingerprint, face recognition |

**Password Managers:**
- Generate strong random passwords
- Store passwords securely (encrypted)
- Auto-fill login forms
- Require one master password
- Examples: LastPass, 1Password, Bitwarden

#### Software Updates

Keeping software updated is critical for security.

**Why Updates Matter:**
- Patch security vulnerabilities
- Fix bugs that could be exploited
- Improve security features
- Update malware definitions
- Address newly discovered threats

**What to Update:**
- Operating systems
- Applications and browsers
- Antivirus software
- Network devices (routers, firewalls)
- Mobile devices

### 3.2 Organisational Protection Measures

#### Access Control

Access control ensures only authorised users can access resources.

**Principles:**
- **Least privilege:** Users have minimum access needed
- **Need-to-know:** Access limited to job requirements
- **Separation of duties:** Critical tasks require multiple people

**Access Control Methods:**
- User accounts with unique identifiers
- Role-based access control (RBAC)
- Time-based access restrictions
- Location-based access restrictions

#### Acceptable Use Policies (AUP)

An AUP defines how an organisation's IT resources may be used.

**AUP Contents:**
- Permitted and prohibited activities
- Email and internet usage rules
- Social media guidelines
- Data handling requirements
- Password requirements
- Consequences of violations

#### Data Backup

Regular backups ensure data can be recovered after loss.

**Backup Strategies:**

| Strategy | What's Backed Up | Advantages |
|----------|-----------------|------------|
| Full | All selected data | Complete recovery |
| Incremental | Changed since last backup | Fast, small |
| Differential | Changed since last full | Medium speed |

**Backup Best Practices:**
- Follow 3-2-1 rule: 3 copies, 2 media types, 1 offsite
- Test backups regularly
- Encrypt sensitive backup data
- Automate backup schedules
- Document recovery procedures

### 3.3 Personal Protection Measures

#### Personal Firewalls

Personal firewalls protect individual devices from network threats.

**Functions:**
- Monitor incoming and outgoing connections
- Block suspicious network activity
- Alert user to connection attempts
- Control application network access

#### Secure Browsing

**Safe Browsing Practices:**
- Look for HTTPS in URL (padlock icon)
- Avoid clicking unknown links
- Don't download from untrusted sources
- Use privacy-focused browsers or settings
- Clear cookies and cache regularly
- Use ad blockers to avoid malvertising

#### Recognising Threats

**Key Warning Signs:**
- Unexpected emails requesting action
- Deals that seem too good to be true
- Pressure to act immediately
- Requests for personal information
- Suspicious website URLs
- Pop-ups claiming infection

---

## 4. Consequences of Data Breaches

### 4.1 Personal Consequences

- **Identity theft:** Criminals use personal information for fraud
- **Financial loss:** Stolen money, fraudulent transactions
- **Privacy violation:** Personal information exposed publicly
- **Emotional distress:** Anxiety and stress from violation
- **Credit damage:** Difficulties obtaining loans or credit

### 4.2 Organisational Consequences

- **Financial costs:** Remediation, fines, compensation
- **Reputational damage:** Loss of customer trust
- **Legal consequences:** Regulatory fines and lawsuits
- **Operational disruption:** System downtime, investigation costs
- **Competitive disadvantage:** Loss of intellectual property

---

## 5. Common Exam Mistakes and Key Points

### Common Mistakes to Avoid

1. **Confusing Malware Types:** Know the differences—viruses need host files, worms self-replicate, Trojans masquerade as legitimate software.

2. **Overlooking Human Factors:** Social engineering targets people, not systems. Technical measures alone are insufficient.

3. **Incomplete Security Advice:** When asked how to protect data, mention both technical measures AND user behaviours.

4. **Forgetting Encryption:** Always mention encryption for protecting data in transit and at rest.

### Key Points for Exams

- Malware includes viruses, worms, Trojans, ransomware, spyware
- Phishing uses fraudulent communications to steal information
- Strong passwords are long, complex, and unique
- Two-factor authentication adds security beyond passwords
- Encryption protects data confidentiality
- Regular backups enable data recovery
- Software updates patch security vulnerabilities
- AUPs define acceptable IT resource usage

---

## 6. Key Terms and Definitions

| Term | Definition |
|------|------------|
| Malware | Malicious software designed to harm systems |
| Virus | Malware that attaches to files and replicates |
| Worm | Self-replicating malware spreading across networks |
| Trojan | Malware disguised as legitimate software |
| Ransomware | Malware that encrypts data for ransom |
| Phishing | Fraudulent attempt to obtain sensitive information |
| Social Engineering | Manipulating people to obtain information |
| Firewall | Security device filtering network traffic |
| Encryption | Converting data to unreadable form |
| Authentication | Verifying identity before granting access |
| 2FA/MFA | Two-factor/Multi-factor authentication |
| AUP | Acceptable Use Policy for IT resources |

---

*These notes cover the Pearson Edexcel IGCSE ICT specification for Chapter 6: Risks to Data and Personal Information. Ensure you understand each concept and can apply them to exam scenarios.*
