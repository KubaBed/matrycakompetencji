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

// Base64 encoded Appchance logo (SVG converted for jsPDF)
const APPCHANCE_LOGO_BASE64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0iI0U0MTg0NCIgZD0iTTMxLjIsMTguM2MtMC41LTAuNi0wLjgtMS40LTAuOC0yLjFzMC4yLTEuNiwwLjctMi4xYzAuMi0wLjIsMC4zLTAuNSwwLjQtMC44YzAuMS0wLjMsMC4xLTAuNiwwLTAuOWMtMC4yLTAuOS0wLjUtMS43LTAuOC0yLjZDMzAuMyw5LDMwLDguMiwyOS42LDcuNWMtMC4yLTAuMi0wLjQtMC41LTAuNy0wLjdjLTAuMi0wLjItMC42LTAuMi0wLjgtMC4yYy0wLjctMC4xLTEuNS0wLjQtMi0wLjljLTAuNi0wLjYtMC44LTEuMy0wLjktMi4xYzAtMC4zLTAuMS0wLjYtMC4yLTAuOWMtMC4yLTAuMi0wLjMtMC41LTAuNy0wLjdjLTAuNy0wLjQtMS40LTAuOC0yLjEtMS4yYy0wLjgtMC4zLTEuNi0wLjctMi41LTAuOGMtMC4zLTAuMS0wLjYtMC4xLTAuOSwwYy0wLjMsMC4xLTAuNiwwLjItMC44LDAuNGMtMC42LDAuNS0xLjMsMC44LTIuMSwwLjhjLTAuNywwLTEuNS0wLjItMi4xLTAuOGMtMC4yLTAuMi0wLjUtMC4zLTAuOC0wLjRjLTAuMy0wLjEtMC42LTAuMS0wLjksMGMtMC44LDAuMi0xLjcsMC41LTIuNSwwLjhDOC45LDEuMyw4LjMsMS42LDcuNiwyLjFDNy4zLDIuMyw3LjEsMi41LDYuOSwyLjdDNi44LDMsNi43LDMuMyw2LjcsMy42QzYuNiw0LjQsNi4zLDUuMSw1LjgsNS43Yy0wLjYsMC42LTEuMywwLjktMi4xLDFjLTAuMiwwLTAuNiwwLjEtMC44LDAuMkMyLjcsNywyLjQsNy4yLDIuMyw3LjVDMS45LDguMiwxLjUsOSwxLjIsOS43Yy0wLjMsMC44LTAuNywxLjctMC44LDIuNmMtMC4xLDAuMi0wLjEsMC42LDAsMC44czAuMiwwLjYsMC40LDAuN2MwLjUsMC42LDAuOCwxLjQsMC44LDIuMWMwLDAuOC0wLjMsMS42LTAuOCwyLjFjLTAuMiwwLjItMC4zLDAuNS0wLjQsMC43Yy0wLjEsMC4yLTAuMSwwLjYsMCwwLjhjMC4yLDAuOSwwLjUsMS44LDAuOCwyLjZzMC43LDEuNiwxLjIsMi4yYzAuMiwwLjIsMC4zLDAuNCwwLjYsMC42YzAuMiwwLjIsMC41LDAuMiwwLjgsMC4yYzAuNywwLDEuNSwwLjQsMi4xLDAuOWMwLjYsMC42LDAuOCwxLjMsMC45LDIuMWMwLDAuMywwLjEsMC42LDAuMiwwLjljMC4yLDAuMiwwLjMsMC41LDAuNywwLjdjMC43LDAuNCwxLjQsMC44LDIuMSwxLjJjMC44LDAuMywxLjYsMC43LDIuNSwwLjhjMC4zLDAuMSwwLjYsMC4xLDAuOSwwczAuNi0wLjIsMC44LTAuNGMwLjYtMC41LDEuMy0wLjgsMi4xLTAuOGMwLjcsMCwxLjUsMC4yLDIuMSwwLjhjMC4yLDAuMiwwLjUsMC4zLDAuOCwwLjRzMC42LDAuMSwwLjksMGMwLjgtMC4yLDEuNy0wLjUsMi41LTAuOGMwLjctMC4zLDEuNS0wLjcsMi4xLTEuMmMwLjItMC4yLDAuNS0wLjQsMC43LTAuN2MwLjItMC4yLDAuMi0wLjYsMC4yLTAuOWMwLjEtMC43LDAuNC0xLjUsMC45LTIuMWMwLjYtMC42LDEuMy0wLjksMi4xLTAuOWMwLjIsMCwwLjYtMC4xLDAuOC0wLjJjMC4yLTAuMiwwLjQtMC4zLDAuNi0wLjZjMC40LTAuNywwLjgtMS41LDEuMi0yLjJjMC4zLTAuOCwwLjctMS43LDAuOC0yLjZjMC4xLTAuMiwwLjEtMC42LDAtMC44QzMxLjUsMTguOCwzMS40LDE4LjUsMzEuMiwxOC4zeiBNMjQuNywyNS4yYy0xLjIsMS4yLTIuNiwyLjEtNCwyLjhjLTEuNSwwLjYtMy4xLDAuOS00LjgsMC45cy0zLjMtMC4zLTQuOC0xYy0xLjUtMC43LTIuOS0xLjYtNC0yLjhDNiwyMy45LDUsMjIuNSw0LjQsMjFjLTAuNi0xLjUtMC45LTMuMi0wLjktNC45czAuMy0zLjQsMC45LTQuOUM1LDkuNyw2LDguMyw3LjEsNy4xczIuNi0yLjEsNC0yLjhjMS42LTAuNywzLjEtMSw0LjgtMXMzLjMsMC4zLDQuOCwxYzEuNSwwLjcsMi45LDEuNiw0LDIuOGMxLjIsMS4yLDIuMSwyLjYsMi43LDQuMXMxLDMuMiwwLjksNC45YzAsMS42LTAuMywzLjQtMC45LDQuOUMyNi45LDIyLjUsMjYsMjMuOSwyNC43LDI1LjJ6IE0xNS45LDguNGMtMSwwLTIsMC4yLTIuOSwwLjZjLTAuOSwwLjQtMS43LDEtMi41LDEuNmMtMC43LDAuNy0xLjIsMS42LTEuNiwyLjZjLTAuNCwwLjktMC42LDItMC42LDNjMCwyLjEsMC44LDQsMi4zLDUuNEMxMiwyMywxNCwyMy44LDE2LDIzLjhoMS4yYzAuMSwwLDAuMi0wLjEsMC4yLTAuMWMwLjEtMC4xLDAuMS0wLjIsMC4xLTAuMnYtMi43YzAtMC4xLDAtMC4yLTAuMS0wLjJjLTAuMS0wLjEtMC4yLTAuMS0wLjItMC4xSDE2Yy0xLjEsMC0yLjEtMC40LTIuOS0xLjJjLTAuNy0wLjctMS4yLTEuNy0xLjMtMi44YzAtMC42LDAuMS0xLjIsMC4yLTEuN2MwLjItMC42LDAuNS0xLjEsMC45LTEuNXMwLjktMC43LDEuNC0xYzAuNS0wLjIsMS4xLTAuMywxLjYtMC4zYzEuMSwwLjEsMi4xLDAuNSwyLjksMS4zYzAuNywwLjgsMS4yLDEuOSwxLjIsM3Y3LjJjMCwwLjEsMCwwLjEsMCwwLjJzMC4xLDAuMSwwLjEsMC4yYzAsMCwwLjEsMC4xLDAuMiwwLjFzMC4xLDAsMC4yLDBoMi42YzAuMSwwLDAuMi0wLjEsMC4yLTAuMWMwLjEtMC4xLDAuMS0wLjIsMC4xLTAuMnYtNy4yYzAtMi4xLTAuNy00LTIuMS01LjVDMTkuOSw5LjMsMTgsOC41LDE1LjksOC40TDE1LjksOC40eiIvPjwvc3ZnPg==';

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

// Helper to convert SVG to PNG data URL via canvas
const getLogoPngDataUrl = (size: number = 100): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, size, size);
        resolve(canvas.toDataURL('image/png'));
      } else {
        resolve('');
      }
    };
    img.onerror = () => resolve('');
    img.src = APPCHANCE_LOGO_BASE64;
  });
};

export const generatePDFReport = async (data: PDFReportData): Promise<void> => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  // Pre-load logo
  const logoPng = await getLogoPngDataUrl(200);

  // Helper function for new page
  const checkNewPage = (neededSpace: number) => {
    if (yPosition + neededSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper to add page header with logo
  const addPageHeader = (title: string) => {
    doc.setFillColor(227, 30, 74); // Appchance red
    doc.rect(0, 0, pageWidth, 20, 'F');
    
    // Small logo in header
    if (logoPng) {
      try {
        doc.addImage(logoPng, 'PNG', margin, 3, 14, 14);
      } catch (e) {
        // Fallback if logo fails
      }
    }
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(title, margin + 18, 13);
  };

  // ============ PAGE 1: Title Page ============
  // Header background
  doc.setFillColor(227, 30, 74);
  doc.rect(0, 0, pageWidth, 70, 'F');

  // Logo on title page (centered, larger)
  if (logoPng) {
    try {
      doc.addImage(logoPng, 'PNG', pageWidth / 2 - 15, 10, 30, 30);
    } catch (e) {
      // Fallback if logo fails
    }
  }

  // Company name below logo
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Appchance', pageWidth / 2, 52, { align: 'center' });
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(branding.appName, pageWidth / 2, 64, { align: 'center' });

  // Main title
  yPosition = 95;
  doc.setTextColor(30, 30, 60);
  doc.setFontSize(26);
  doc.setFont('helvetica', 'bold');
  doc.text('Raport Kompetencji', pageWidth / 2, yPosition, { align: 'center' });

  // Employee info
  yPosition = 125;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  if (data.employeeName) {
    doc.text(data.employeeName, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 14;
  }
  
  doc.setFontSize(14);
  doc.text(data.positionName, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 12;
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(`${seniorityLevelConfig[data.seniorityLevel].name} | ${data.departmentName}`, pageWidth / 2, yPosition, { align: 'center' });

  // Score box
  yPosition = 170;
  doc.setFillColor(245, 245, 250);
  doc.roundedRect(margin, yPosition, pageWidth - 2 * margin, 55, 5, 5, 'F');
  
  doc.setTextColor(30, 30, 60);
  doc.setFontSize(42);
  doc.setFont('helvetica', 'bold');
  doc.text(`${data.matchPercentage}%`, pageWidth / 2, yPosition + 32, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Dopasowanie do stanowiska', pageWidth / 2, yPosition + 48, { align: 'center' });

  // Date
  yPosition = 245;
  doc.setFontSize(10);
  doc.setTextColor(120, 120, 120);
  doc.text(`Data wygenerowania: ${data.date}`, pageWidth / 2, yPosition, { align: 'center' });

  // Footer on first page
  doc.setFontSize(8);
  doc.text(`© ${new Date().getFullYear()} Appchance`, pageWidth / 2, pageHeight - 15, { align: 'center' });

  // ============ PAGE 2: Summary ============
  doc.addPage();
  yPosition = margin;

  addPageHeader('Podsumowanie wynikow');

  yPosition = 35;
  doc.setTextColor(30, 30, 60);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Podsumowanie', margin, yPosition);

  // Stats boxes
  yPosition = 55;
  const boxWidth = (pageWidth - 2 * margin - 20) / 3;
  
  // Strengths box
  doc.setFillColor(220, 252, 231);
  doc.roundedRect(margin, yPosition, boxWidth, 45, 3, 3, 'F');
  doc.setTextColor(22, 163, 74);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text(String(data.strengths.length), margin + boxWidth / 2, yPosition + 26, { align: 'center' });
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Mocne strony', margin + boxWidth / 2, yPosition + 39, { align: 'center' });

  // Match box
  doc.setFillColor(224, 242, 254);
  doc.roundedRect(margin + boxWidth + 10, yPosition, boxWidth, 45, 3, 3, 'F');
  doc.setTextColor(14, 116, 144);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text(`${data.matchPercentage}%`, margin + boxWidth + 10 + boxWidth / 2, yPosition + 26, { align: 'center' });
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Dopasowanie', margin + boxWidth + 10 + boxWidth / 2, yPosition + 39, { align: 'center' });

  // Development box
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(margin + 2 * (boxWidth + 10), yPosition, boxWidth, 45, 3, 3, 'F');
  doc.setTextColor(217, 119, 6);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text(String(data.developmentAreas.length), margin + 2 * (boxWidth + 10) + boxWidth / 2, yPosition + 26, { align: 'center' });
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Do rozwoju', margin + 2 * (boxWidth + 10) + boxWidth / 2, yPosition + 39, { align: 'center' });

  // Strengths section (no emoji)
  yPosition = 120;
  doc.setTextColor(22, 163, 74);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Mocne strony', margin, yPosition);
  
  yPosition += 12;
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  if (data.strengths.length > 0) {
    data.strengths.forEach((s) => {
      doc.text(`• ${s.competencyName} (+${s.gap} powyzej wymagan)`, margin + 5, yPosition);
      yPosition += 9;
    });
  } else {
    doc.text('Brak kompetencji znaczaco powyzej wymagan', margin + 5, yPosition);
    yPosition += 9;
  }

  // Development areas section (no emoji)
  yPosition += 12;
  doc.setTextColor(217, 119, 6);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Obszary do rozwoju', margin, yPosition);
  
  yPosition += 12;
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  if (data.developmentAreas.length > 0) {
    data.developmentAreas.forEach((d) => {
      const devComp = data.competencies.find(c => c.id === d.competencyId);
      const nextLevelDesc = devComp?.levels.find(l => l.level === d.requiredLevel)?.description || '';
      doc.text(`• ${d.competencyName} (${d.gap} ponizej wymagan)`, margin + 5, yPosition);
      yPosition += 7;
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      const descLines = doc.splitTextToSize(`  Cel: ${nextLevelDesc}`, pageWidth - 2 * margin - 15);
      descLines.forEach((line: string) => {
        doc.text(line, margin + 10, yPosition);
        yPosition += 6;
      });
      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);
      yPosition += 5;
    });
  } else {
    doc.text('Gratulacje! Spelniasz wszystkie wymagania na stanowisko.', margin + 5, yPosition);
  }

  // ============ PAGE 3+: Detailed Results ============
  doc.addPage();
  yPosition = margin;

  addPageHeader('Szczegolowe wyniki');

  yPosition = 35;
  doc.setTextColor(30, 30, 60);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Szczegolowe wyniki', margin, yPosition);
  yPosition += 18;

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
    head: [['Kompetencja', 'Kategoria', 'Twoja ocena', 'Wymagane', 'Roznica']],
    body: tableData,
    styles: {
      fontSize: 9,
      cellPadding: 5,
      font: 'helvetica',
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
      if (data.column.index === 4 && data.section === 'body') {
        const value = parseInt(data.cell.text[0]);
        if (value > 0) {
          data.cell.styles.textColor = [22, 163, 74];
        } else if (value < 0) {
          data.cell.styles.textColor = [220, 38, 38];
        }
      }
    },
  });

  // ============ LAST PAGE: Recommendations ============
  doc.addPage();
  yPosition = margin;

  addPageHeader('Rekomendacje rozwojowe');

  yPosition = 35;
  doc.setTextColor(30, 30, 60);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Sciezka rozwoju', margin, yPosition);
  yPosition += 18;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);

  if (data.developmentAreas.length > 0) {
    doc.text('Na podstawie Twojej samooceny, rekomendujemy skupienie sie na nastepujacych obszarach:', margin, yPosition);
    yPosition += 18;

    data.developmentAreas.forEach((area, index) => {
      checkNewPage(55);
      
      const comp = data.competencies.find(c => c.id === area.competencyId);
      const targetLevel = comp?.levels.find(l => l.level === area.requiredLevel);
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(227, 30, 74);
      doc.text(`${index + 1}. ${area.competencyName}`, margin, yPosition);
      yPosition += 10;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.text(`Aktualny poziom: ${area.selfRating} -> Cel: ${area.requiredLevel}`, margin + 5, yPosition);
      yPosition += 9;
      
      if (targetLevel) {
        doc.setFontSize(9);
        const goalLines = doc.splitTextToSize(`Oczekiwania: ${targetLevel.description}`, pageWidth - 2 * margin - 15);
        goalLines.forEach((line: string) => {
          doc.text(line, margin + 5, yPosition);
          yPosition += 6;
        });
      }
      yPosition += 12;
    });
  } else {
    doc.text('Gratulacje! Twoje kompetencje odpowiadaja wymaganiom na stanowisku.', margin, yPosition);
    yPosition += 18;
    doc.text('Rozwaz rozwijanie kompetencji wymaganych na nastepnym poziomie kariery.', margin, yPosition);
  }

  // Final note
  yPosition = pageHeight - 55;
  doc.setFillColor(248, 248, 252);
  doc.roundedRect(margin, yPosition, pageWidth - 2 * margin, 35, 3, 3, 'F');
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('Ten raport zostal wygenerowany automatycznie na podstawie samooceny.', pageWidth / 2, yPosition + 14, { align: 'center' });
  doc.text('Skonsultuj wyniki z przelozonym lub dzialem HR.', pageWidth / 2, yPosition + 26, { align: 'center' });

  // Save the PDF
  const fileName = data.employeeName 
    ? `Raport_kompetencji_${data.employeeName.replace(/\s/g, '_')}_${data.date}.pdf`
    : `Raport_kompetencji_${data.positionName.replace(/\s/g, '_')}_${data.date}.pdf`;
  
  doc.save(fileName);
};
