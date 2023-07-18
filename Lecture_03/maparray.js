const finalparticipants = ['Taylor','donald','Don','Natasha','Bobby'];

const announcements = finalparticipants.map((member) => {
    return member + ' joined the contest.';
} );

console.log(announcements);