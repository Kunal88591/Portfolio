import React from 'react'
import jsPDF from 'jspdf'
import resume from '../data/resume.json'

export default function ResumeDownload() {
  const download = () => {
    const doc = new jsPDF()
    doc.setFontSize(20)
    doc.text(resume.name, 20, 20)
    doc.setFontSize(12)
    doc.text(resume.title, 20, 28)
    doc.text(resume.email, 20, 36)

    doc.setFontSize(14)
    doc.text('Summary', 20, 50)
    doc.setFontSize(11)
    doc.text(resume.summary, 20, 56, { maxWidth: 170 })

    let y = 80
    doc.setFontSize(14)
    doc.text('Experience', 20, y)
    doc.setFontSize(11)
    resume.experience.forEach((e) => {
      y += 8
      doc.text(`${e.role} — ${e.company} (${e.period})`, 20, y)
      y += 6
      doc.text(e.details, 20, y, { maxWidth: 170 })
      y += 6
    })

    doc.save(`${resume.name.replace(/ /g, '_')}_Resume.pdf`)
  }

  return (
    <button onClick={download} className="rounded bg-accent text-white px-4 py-2">
      Download Resume (PDF)
    </button>
  )
}
