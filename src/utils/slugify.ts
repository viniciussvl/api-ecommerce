/**
 * Converts a given string to a slug, making it lower case, clearing whitespace from both sides of the string, 
 * normalizing to NFKD (unicode normalization form), 
 * replacing spaces with - and removing non-word characters.
 * 
 * @param {string} text 
 * @returns A string in slug format
 */
 const slugify = function(text: string, separator: string = '-') {
    return text
    .toString()                          
    .normalize('NFKD')           
    .toLowerCase()                  
    .trim()                                 
    .replace(/\s+/g, separator)            
    .replace(/[^\w\-]+/g, '')     
    .replace(/\-\-+/g, separator); 
} 

export default slugify;