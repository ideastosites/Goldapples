import zipfile
import xml.etree.ElementTree as ET

def read_docx(path):
    with zipfile.ZipFile(path) as docx:
        xml_content = docx.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        
        # Define the namespace
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        # Extract all text from paragraphs
        text = []
        for paragraph in tree.findall('.//w:p', ns):
            para_text = ""
            for run in paragraph.findall('.//w:r', ns):
                for text_node in run.findall('.//w:t', ns):
                    para_text += text_node.text or ""
            if para_text:
                text.append(para_text)
                
        return '\n'.join(text)

try:
    print(read_docx("GOLDAPPLES MEDIA ASSOCIATES Final Website.docx"))
except Exception as e:
    print("Error:", e)
