/**
 * Converts a given string to a slug, making it lower case, clearing whitespace from both sides of the string, 
 * normalizing to NFKD (unicode normalization form), 
 * replacing spaces with - and removing non-word characters.
 * 
 * @param {String} text 
 * @returns A string in slug format
 */
 const slugify = function(text: String) {
    return text
    .toString()                          
    .normalize('NFKD')           
    .toLowerCase()                  
    .trim()                                 
    .replace(/\s+/g, '-')            
    .replace(/[^\w\-]+/g, '')     
    .replace(/\-\-+/g, '-'); 
} 

export default slugify;