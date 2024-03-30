import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#E4E4E4',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
    color: '#B71540',
  },
  section: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FFF',
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  sectionContent: {
    fontSize: 14,
    color: '#666',
  },
});

function ResumeGenerator() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    image: null,
    occupation: '',
    address: '',
    email: '',
    phoneNumber: '',
    summary: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const ResumeDocument = () => (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>{`${formData.firstName} ${formData.middleName} ${formData.lastName}`}</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Occupation</Text>
          <Text style={styles.sectionContent}>{formData.occupation}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Email</Text>
          <Text style={styles.sectionContent}>{formData.email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Phone Number</Text>
          <Text style={styles.sectionContent}>{formData.phoneNumber}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address</Text>
          <Text style={styles.sectionContent}>{formData.address}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.sectionContent}>{formData.summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.sectionContent}>{formData.education}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <Text style={styles.sectionContent}>{formData.experience}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.sectionContent}>{formData.skills}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="p-6">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="middleName">
          Middle Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="middleName" type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occupation">
          Occupation
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="occupation" type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
          Summary
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="summary" name="summary" value={formData.summary} onChange={handleChange} />
      </div>
      {/* Additional fields */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="education">
          Education
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="education" type="text" name="education" value={formData.education} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
          Experience
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="experience" type="text" name="experience" value={formData.experience} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
          Skills
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="skills" type="text" name="skills" value={formData.skills} onChange={handleChange} />
      </div>
      <PDFDownloadLink document={<ResumeDocument />} fileName="resume.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Resume')}
      </PDFDownloadLink>
    </div>
  );
}

export default ResumeGenerator;