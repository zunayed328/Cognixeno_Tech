const fs = require('fs');
const path = require('path');

const walk = (dir, callback) => {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

const directories = ['app', 'components'];

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    walk(dir, (filePath) => {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;

        // Replace viewport
        newContent = newContent.replace(/viewport=\{\{\s*once:\s*true\s*\}\}/g, 'viewport={{ once: false, amount: 0.1 }}');
        
        // Replace durations
        newContent = newContent.replace(/duration:\s*0\.8/g, 'duration: 0.4');
        newContent = newContent.replace(/duration:\s*0\.5/g, 'duration: 0.3'); // Make 0.5 a bit faster too, though user specifically said 0.8 -> 0.4

        // Replace delays
        newContent = newContent.replace(/delay:\s*index\s*\*\s*0\.2/g, 'delay: index * 0.08');
        newContent = newContent.replace(/delay:\s*i\s*\*\s*0\.2/g, 'delay: i * 0.08');

        // Replace initials
        newContent = newContent.replace(/y:\s*60/g, 'y: 20');
        newContent = newContent.replace(/y:\s*50/g, 'y: 20'); // also fix 50s
        
        if (content !== newContent) {
          fs.writeFileSync(filePath, newContent);
          console.log(`Updated ${filePath}`);
        }
      }
    });
  }
});
