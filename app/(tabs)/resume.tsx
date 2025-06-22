

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ResumeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>Sukhmani Thukral</Text>
      <Text style={styles.contact}>
        thukralsukhmani@cityuniversity.edu | (206) 225-8829 | (425) 894-3537
      </Text>

      <Section title="Education">
        <Text style={styles.paragraph}>City University, Masters in Computer Science</Text>
      </Section>

      <Section title="Professional Overview">
        <Text style={styles.paragraph}>
          I have extensive programming experience in .NET and Salesforce, with strong DevOps skills including automation via Ansible and Jenkins...
          {/* You can truncate or expand this as needed */}
        </Text>
      </Section>


      <Section title="Work Experience">
        <Job
          title="Azure Support Engineer"
          company="Mindtree"
          date="2022 - 2024"
          location="Bellevue, WA"
          bullets={[
            "Provided solutions related to AKS, ACR, ARO, and ACI issues",
            "Ran Kusto Queries and used Copilot to assist with client responses",
            "Resolved DSC automation and DNS/VNET issues",
          ]}
        />

        <Job
          title="Scribe/Reader/Note-Taker"
          company="Bellevue College"
          date="2017 - 2020"
          location="Bellevue, WA"
          bullets={[
            "Took notes in subjects like PowerShell, Linux, and Networking",
            "Assisted students with CLI tools like Git, AWS CLI, and bash terminals",
          ]}
        />


      </Section>

      <Section title="Technical Skills">
        <Text style={styles.paragraph}>• Docker • Azure • SQL Server • Jenkins • React Native • MERN/MEAN • Power BI • Linux • AWS • GCP • Networking • DevOps • NLP • LangChain</Text>
      </Section>

      <Section title="Education Highlights">
        <Text style={styles.paragraph}>• Bachelors in IT – Bellevue College (2021){'\n'}• Software Test Engineering – Bellevue (2012){'\n'}• AI Prompt Engineering – Perscholas</Text>
      </Section>

      <Section title="Industry Certifications">
        <Text style={styles.paragraph}>• Microsoft Azure Certified{'\n'}• Salesforce Developer{'\n'}• AWS Certified</Text>
      </Section>
    </ScrollView>
  );
}

// Section component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

// Job component
const Job = ({
  title,
  company,
  date,
  location,
  bullets,
}: {
  title: string;
  company: string;
  date: string;
  location: string;
  bullets: string[];
}) => (
  <View style={styles.job}>
    <Text style={styles.jobTitle}>{title}</Text>
    <Text style={styles.jobMeta}>{company} | {date} | {location}</Text>
    {bullets.map((bullet, index) => (
      <Text key={index} style={styles.bullet}>• {bullet}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  contact: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#2c3e50',
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
  },
  job: {
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  jobMeta: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  bullet: {
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 10,
  },
});
