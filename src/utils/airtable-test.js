// Airtable Connection Test Script
// Run this in the browser console to debug Airtable integration issues

console.log('=== AIRTABLE CONNECTION TEST ===\n');

// 1. Check Environment Variables
console.log('1. Checking Environment Variables:');
const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

console.log('API Key:', apiKey ? `✓ Set (${apiKey.substring(0, 10)}...)` : '✗ Missing');
console.log('Base ID:', baseId ? `✓ Set (${baseId})` : '✗ Missing');
console.log('Table Name:', tableName ? `✓ Set (${tableName})` : '✗ Missing (using default: Contact Form)');

if (!apiKey || !baseId) {
    console.error('\n❌ ERROR: Missing required environment variables!');
    console.log('Please check your .env.local file contains:');
    console.log('VITE_AIRTABLE_API_KEY=your_api_key');
    console.log('VITE_AIRTABLE_BASE_ID=your_base_id');
    console.log('VITE_AIRTABLE_TABLE_NAME=Contact Form');
} else {
    console.log('\n✓ All environment variables are set\n');

    // 2. Test API Connection
    console.log('2. Testing Airtable API Connection...');
    const testTableName = tableName || 'Contact Form';
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(testTableName)}`;

    console.log('API URL:', apiUrl);

    // Test with a sample record
    const testRecord = {
        fields: {
            Name: 'Test User',
            Email: 'test@example.com',
            Company: 'Test Company',
            Designation: 'Tester',
            Phone: '+91 9999999999',
            Location: 'Test City',
            'Service Interest': 'Testing',
            Message: 'This is a test submission',
            Status: 'New'
        }
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testRecord),
    })
        .then(response => {
            console.log('Response Status:', response.status, response.statusText);
            return response.json();
        })
        .then(data => {
            if (data.error) {
                console.error('\n❌ API ERROR:', data.error);
                console.log('\nCommon Issues:');
                console.log('- Check if the table name matches exactly (case-sensitive)');
                console.log('- Verify all field names in Airtable match the code');
                console.log('- Ensure API key has write permissions');
                console.log('- Check if Base ID is correct');
            } else {
                console.log('\n✅ SUCCESS! Test record created:');
                console.log('Record ID:', data.id);
                console.log('Created Time:', data.createdTime);
                console.log('\nYou should see this test record in your Airtable table.');
                console.log('If you see it, the integration is working correctly!');
            }
        })
        .catch(error => {
            console.error('\n❌ NETWORK ERROR:', error.message);
            console.log('\nPossible causes:');
            console.log('- No internet connection');
            console.log('- CORS issues (unlikely with Airtable)');
            console.log('- Firewall blocking the request');
        });
}

console.log('\n=== END OF TEST ===');
