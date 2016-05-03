/**
 * Created by alexandr on 03.05.2016.
 */
function trimEachString(aString)
{
    return aString.split('\n').map(function(aLine)
    {
        aLine = aLine.trim();
        return aLine;
    }).join('\n');
}