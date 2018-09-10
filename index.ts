import command from './command';

async function  init(){
    try {
        await command('git fetch --all');
        const {stdout} = await command('git rev-parse --abbrev-ref HEAD');
        console.log('branch name:', stdout);
    } catch (e) {
        console.error('an error baby', e);
    }
}

init();