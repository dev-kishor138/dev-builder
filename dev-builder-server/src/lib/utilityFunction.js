export const generateSlug = (text) => {
    return text
        .toString()
        .normalize('NFD')                   // ইউনিকোড নর্মালাইজেশন
        .replace(/[\u0300-\u036f]/g, '')    // ডায়াক্রিটিক চিহ্ন অপসারণ
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')       // অ্যালফানিউমেরিক, স্পেস ও হাইফেন ব্যতীত অন্যান্য চিহ্ন অপসারণ
        .replace(/\s+/g, '-')               // স্পেসকে হাইফেনে রূপান্তর
        .replace(/-+/g, '-')                // একাধিক হাইফেনকে একটি হাইফেনে সংকোচন
        .replace(/^-+|-+$/g, '');           // শুরু ও শেষে হাইফেন অপসারণ
};


export const generateUniqueSlug = async (model, name) => {
    let slug = generateSlug(name);
    let existingRecord = await model.findOne({ slug });
    let suffix = 1;
    while (existingRecord) {
        slug = `${generateSlug(name)}-${suffix}`;
        existingRecord = await model.findOne({ slug });
        suffix++;
    }
    return slug;
}
