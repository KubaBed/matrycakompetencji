import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { 
  AssessmentResult, 
  SeniorityLevel, 
  seniorityLevelConfig,
  categoryConfig,
  Competency 
} from '@/types/competency';
import { branding } from '@/config/branding';

interface PDFReportData {
  employeeName?: string;
  positionName: string;
  seniorityLevel: SeniorityLevel;
  departmentName: string;
  date: string;
  results: AssessmentResult[];
  competencies: Competency[];
  matchPercentage: number;
  overallScore: number;
  strengths: AssessmentResult[];
  developmentAreas: AssessmentResult[];
}

export const generatePDFReport = (data: PDFReportData): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  // Helper function for new page
  const checkNewPage = (neededSpace: number) => {
    if (yPosition + neededSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // ============ PAGE 1: Title Page ============
  // Header background
  doc.setFillColor(227, 30, 74); // Appchance red
  doc.rect(0, 0, pageWidth, 60, 'F');

  // Company name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(branding.companyName, pageWidth / 2, 25, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(branding.appName, pageWidth / 2, 38, { align: 'center' });

  doc.setFontSize(10);
  doc.text('Raport samooceny kompetencji', pageWidth / 2, 52, { align: 'center' });

  // Main title
  yPosition = 90;
  doc.setTextColor(30, 30, 60);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('Raport Kompetencji', pageWidth / 2, yPosition, { align: 'center' });

  // Employee info
  yPosition = 120;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  if (data.employeeName) {
    doc.text(data.employeeName, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 12;
  }
  
  doc.setFontSize(14);
  doc.text(`${data.positionName}`, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 10;
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(`${seniorityLevelConfig[data.seniorityLevel].name} • ${data.departmentName}`, pageWidth / 2, yPosition, { align: 'center' });

  // Score box
  yPosition = 160;
  doc.setFillColor(245, 245, 250);
  doc.roundedRect(margin, yPosition, pageWidth - 2 * margin, 50, 5, 5, 'F');
  
  doc.setTextColor(30, 30, 60);
  doc.setFontSize(36);
  doc.setFont('helvetica', 'bold');
  doc.text(`${data.matchPercentage}%`, pageWidth / 2, yPosition + 28, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Dopasowanie do stanowiska', pageWidth / 2, yPosition + 42, { align: 'center' });

  // Date
  yPosition = 230;
  doc.setFontSize(10);
  doc.setTextColor(120, 120, 120);
  doc.text(`Data wygenerowania: ${data.date}`, pageWidth / 2, yPosition, { align: 'center' });

  // Footer on first page
  doc.setFontSize(8);
  doc.text(`© ${new Date().getFullYear()} ${branding.companyName}`, pageWidth / 2, pageHeight - 15, { align: 'center' });

  // ============ PAGE 2: Summary ============
  doc.addPage();
  yPosition = margin;

  // Page header
  doc.setFillColor(227, 30, 74);
  doc.rect(0, 0, pageWidth, 20, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('Podsumowanie wyników', margin, 13);

  yPosition = 35;
  doc.setTextColor(30, 30, 60);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Podsumowanie', margin, yPosition);

  // Stats boxes
  yPosition = 50;
  const boxWidth = (pageWidth - 2 * margin - 20) / 3;
  
  // Strengths box
  doc.setFillColor(220, 252, 231);
  doc.roundedRect(margin, yPosition, boxWidth, 40, 3, 3, 'F');
  doc.setTextColor(22, 163, 74);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(String(data.strengths.length), margin + boxWidth / 2, yPosition + 22, { align: 'center' });
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Mocne strony', margin + boxWidth / 2, yPosition + 34, { align: 'center' });

  // Match box
  doc.setFillColor(224, 242, 254);
  doc.roundedRect(margin + boxWidth + 10, yPosition, boxWidth, 40, 3, 3, 'F');
  doc.setTextColor(14, 116, 144);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(`${data.matchPercentage}%`, margin + boxWidth + 10 + boxWidth / 2, yPosition + 22, { align: 'center' });
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Dopasowanie', margin + boxWidth + 10 + boxWidth / 2, yPosition + 34, { align: 'center' });

  // Development box
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(margin + 2 * (boxWidth + 10), yPosition, boxWidth, 40, 3, 3, 'F');
  doc.setTextColor(217, 119, 6);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(String(data.developmentAreas.length), margin + 2 * (boxWidth + 10) + boxWidth / 2, yPosition + 22, { align: 'center' });
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Do rozwoju', margin + 2 * (boxWidth + 10) + boxWidth / 2, yPosition + 34, { align: 'center' });

  // Strengths section
  yPosition = 110;
  doc.setTextColor(22, 163, 74);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('💪 Mocne strony', margin, yPosition);
  
  yPosition += 10;
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  if (data.strengths.length > 0) {
    data.strengths.forEach((s) => {
      doc.text(`• ${s.competencyName} (+${s.gap} powyżej wymagań)`, margin + 5, yPosition);
      yPosition += 8;
    });
  } else {
    doc.text('Brak kompetencji znacząco powyżej wymagań', margin + 5, yPosition);
    yPosition += 8;
  }

  // Development areas section
  yPosition += 10;
  doc.setTextColor(217, 119, 6);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('📈 Obszary do rozwoju', margin, yPosition);
  
  yPosition += 10;
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  if (data.developmentAreas.length > 0) {
    data.developmentAreas.forEach((d) => {
      const devComp = data.competencies.find(c => c.id === d.competencyId);
      const nextLevelDesc = devComp?.levels.find(l => l.level === d.requiredLevel)?.description || '';
      doc.text(`• ${d.competencyName} (${d.gap} poniżej wymagań)`, margin + 5, yPosition);
      yPosition += 6;
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      const descLines = doc.splitTextToSize(`  Cel: ${nextLevelDesc}`, pageWidth - 2 * margin - 10);
      descLines.forEach((line: string) => {
        doc.text(line, margin + 10, yPosition);
        yPosition += 5;
      });
      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);
      yPosition += 3;
    });
  } else {
    doc.text('Gratulacje! Spełniasz wszystkie wymagania na stanowisko.', margin + 5, yPosition);
  }

  // ============ PAGE 3+: Detailed Results ============
  doc.addPage();
  yPosition = margin;

  // Page header
  doc.setFillColor(227, 30, 74);
  doc.rect(0, 0, pageWidth, 20, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('Szczegółowe wyniki', margin, 13);

  yPosition = 35;
  doc.setTextColor(30, 30, 60);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Szczegółowe wyniki', margin, yPosition);
  yPosition += 15;

  // Results table
  const tableData = data.results.map(r => [
    r.competencyName,
    categoryConfig[r.category].name,
    String(r.selfRating),
    String(r.requiredLevel),
    r.gap > 0 ? `+${r.gap}` : String(r.gap)
  ]);

  autoTable(doc, {
    startY: yPosition,
    head: [['Kompetencja', 'Kategoria', 'Twoja ocena', 'Wymagane', 'Różnica']],
    body: tableData,
    styles: {
      fontSize: 9,
      cellPadding: 4,
    },
    headStyles: {
      fillColor: [227, 30, 74],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
    },
    columnStyles: {
      0: { cellWidth: 60 },
      1: { cellWidth: 45 },
      2: { halign: 'center', cellWidth: 25 },
      3: { halign: 'center', cellWidth: 25 },
      4: { halign: 'center', cellWidth: 25 },
    },
    alternateRowStyles: {
      fillColor: [248, 248, 252],
    },
    didParseCell: (data) => {
      // Color the gap column based on value
      if (data.column.index === 4 && data.section === 'body') {
        const value = parseInt(data.cell.text[0]);
        if (value > 0) {
          data.cell.styles.textColor = [22, 163, 74]; // green
        } else if (value < 0) {
          data.cell.styles.textColor = [220, 38, 38]; // red
        }
      }
    },
  });

  // ============ LAST PAGE: Recommendations ============
  doc.addPage();
  yPosition = margin;

  // Page header
  doc.setFillColor(227, 30, 74);
  doc.rect(0, 0, pageWidth, 20, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('Rekomendacje rozwojowe', margin, 13);

  yPosition = 35;
  doc.setTextColor(30, 30, 60);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Ścieżka rozwoju', margin, yPosition);
  yPosition += 15;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);

  if (data.developmentAreas.length > 0) {
    doc.text('Na podstawie Twojej samooceny, rekomendujemy skupienie się na następujących obszarach:', margin, yPosition);
    yPosition += 15;

    data.developmentAreas.forEach((area, index) => {
      checkNewPage(50);
      
      const comp = data.competencies.find(c => c.id === area.competencyId);
      const targetLevel = comp?.levels.find(l => l.level === area.requiredLevel);
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(227, 30, 74);
      doc.text(`${index + 1}. ${area.competencyName}`, margin, yPosition);
      yPosition += 8;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.text(`Aktualny poziom: ${area.selfRating} → Cel: ${area.requiredLevel}`, margin + 5, yPosition);
      yPosition += 7;
      
      if (targetLevel) {
        doc.setFontSize(9);
        const goalLines = doc.splitTextToSize(`Oczekiwania: ${targetLevel.description}`, pageWidth - 2 * margin - 10);
        goalLines.forEach((line: string) => {
          doc.text(line, margin + 5, yPosition);
          yPosition += 5;
        });
      }
      yPosition += 10;
    });
  } else {
    doc.text('Gratulacje! Twoje kompetencje odpowiadają wymaganiom na stanowisku.', margin, yPosition);
    yPosition += 15;
    doc.text('Rozważ rozwijanie kompetencji wymaganych na następnym poziomie kariery.', margin, yPosition);
  }

  // Final note
  yPosition = pageHeight - 50;
  doc.setFillColor(248, 248, 252);
  doc.roundedRect(margin, yPosition, pageWidth - 2 * margin, 30, 3, 3, 'F');
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('Ten raport został wygenerowany automatycznie na podstawie samooceny.', pageWidth / 2, yPosition + 12, { align: 'center' });
  doc.text('Skonsultuj wyniki z przełożonym lub działem HR.', pageWidth / 2, yPosition + 22, { align: 'center' });

  // Save the PDF
  const fileName = data.employeeName 
    ? `Raport_kompetencji_${data.employeeName.replace(/\s/g, '_')}_${data.date}.pdf`
    : `Raport_kompetencji_${data.positionName.replace(/\s/g, '_')}_${data.date}.pdf`;
  
  doc.save(fileName);
};
